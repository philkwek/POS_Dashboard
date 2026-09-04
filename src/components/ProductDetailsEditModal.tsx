import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { StoreItemType, StoreItemVariantType } from "@pos-dashboard/shared";
import CreateNewVariant from "./CreateNewVariant";

export interface ProductEditPayload {
  productId: string;
  productPatch: {
    name: string;
    description: string;
    basePrice: number;
    isActive: boolean;
    attributes: string[];
    variants: StoreItemVariantType[];
  };
  variantOperations: {
    upsert: StoreItemVariantType[];
    deleteIds: string[];
  };
  imageOperations: {
    cover: { currentUrl: string; replacementFile: File | null };
    small: { currentUrl: string; replacementFile: File | null };
    additional: {
      retainedUrls: string[];
      addedFiles: File[];
      deletedUrls: string[];
    };
  };
}

interface ProductDetailsEditModalProps {
  product: StoreItemType;
  variants: StoreItemVariantType[];
  onSave: (payload: ProductEditPayload) => void | Promise<void>;
  onCancel: () => void;
  onClose: () => void;
}

interface DraftFields {
  name: string;
  description: string;
  basePrice: string;
  isActive: boolean;
  attributes: string[];
}

interface NewImage {
  id: string;
  file: File;
}

type DiscardAction = "close" | "cancel-edit";

const MAX_IMAGE_SIZE_BYTES = 5 * 1024 * 1024;
const MAX_ADDITIONAL_IMAGES = 10;
const ALLOWED_IMAGE_TYPES = new Set(["image/jpeg", "image/png"]);

const fileSignature = (file: File | null) =>
  file ? `${file.name}:${file.size}:${file.lastModified}` : null;

const ImagePreview: React.FC<{
  url?: string;
  file?: File | null;
  alt: string;
  className?: string;
}> = ({ url, file, alt, className = "aspect-video w-full" }) => {
  const [objectUrl, setObjectUrl] = useState<string>();
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    if (!file) {
      setObjectUrl(undefined);
      return;
    }
    const nextUrl = URL.createObjectURL(file);
    setObjectUrl(nextUrl);
    return () => URL.revokeObjectURL(nextUrl);
  }, [file]);

  const src = objectUrl || url;
  useEffect(() => setFailed(false), [src]);

  if (!src || failed) {
    return (
      <div
        className={`${className} flex items-center justify-center bg-base-200 text-sm text-base-content/50`}
        role="img"
        aria-label={`${alt} unavailable`}
      >
        Image unavailable
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={`${className} bg-base-200 object-contain`}
      onError={() => setFailed(true)}
    />
  );
};

const createDraft = (product: StoreItemType): DraftFields => ({
  name: product.name,
  description: product.description,
  basePrice: String(product.basePrice),
  isActive: product.isActive,
  attributes: (product.attributes || []).map(String),
});

const serializeEdit = (
  draft: DraftFields,
  variants: StoreItemVariantType[],
  cover: File | null,
  small: File | null,
  retainedImages: string[],
  newImages: NewImage[],
) =>
  JSON.stringify({
    draft,
    variants,
    cover: fileSignature(cover),
    small: fileSignature(small),
    retainedImages,
    newImages: newImages.map(({ id, file }) => ({
      id,
      file: fileSignature(file),
    })),
  });

const ProductDetailsEditModal: React.FC<ProductDetailsEditModalProps> = ({
  product,
  variants,
  onSave,
  onCancel,
  onClose,
}) => {
  const initialDraftRef = useRef(createDraft(product));
  const initialVariantsRef = useRef(variants.map((variant) => ({ ...variant })));
  const initialImagesRef = useRef([...(product.additionalImages || [])]);
  const [draft, setDraft] = useState(initialDraftRef.current);
  const [draftVariants, setDraftVariants] = useState(initialVariantsRef.current);
  const [coverReplacement, setCoverReplacement] = useState<File | null>(null);
  const [smallReplacement, setSmallReplacement] = useState<File | null>(null);
  const [retainedImages, setRetainedImages] = useState(initialImagesRef.current);
  const [newImages, setNewImages] = useState<NewImage[]>([]);
  const [formError, setFormError] = useState<string | null>(null);
  const [discardAction, setDiscardAction] = useState<DiscardAction | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const baselineRef = useRef(
    serializeEdit(
      initialDraftRef.current,
      initialVariantsRef.current,
      null,
      null,
      initialImagesRef.current,
      [],
    ),
  );

  const draftSignature = useMemo(
    () =>
      serializeEdit(
        draft,
        draftVariants,
        coverReplacement,
        smallReplacement,
        retainedImages,
        newImages,
      ),
    [coverReplacement, draft, draftVariants, newImages, retainedImages, smallReplacement],
  );
  const isDirty = draftSignature !== baselineRef.current;

  const attemptClose = useCallback(() => {
    if (isSaving) return;
    if (isDirty) setDiscardAction("close");
    else onClose();
  }, [isDirty, isSaving, onClose]);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      if (discardAction) setDiscardAction(null);
      else attemptClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [attemptClose, discardAction]);

  const validate = () => {
    const name = draft.name.trim();
    const description = draft.description.trim();
    const basePrice = Number(draft.basePrice);
    if (!name || name.length > 120) return "Product name is required and must be 120 characters or fewer.";
    if (!description || description.length > 2000) return "Product description is required and must be 2,000 characters or fewer.";
    if (!draft.basePrice.trim() || !Number.isFinite(basePrice) || basePrice < 0) return "Base price must be a valid non-negative number.";
    if (!product.imageURL && !coverReplacement) return "A cover image is required.";
    if (!product.productImageUrl && !smallReplacement) return "A small product image is required.";

    for (const [file, label] of [[coverReplacement, "Cover image"], [smallReplacement, "Small product image"]] as const) {
      if (file && !ALLOWED_IMAGE_TYPES.has(file.type)) return `${label} must be a JPEG or PNG image.`;
      if (file && file.size > MAX_IMAGE_SIZE_BYTES) return `${label} must be 5 MB or smaller.`;
    }
    if (retainedImages.length + newImages.length > MAX_ADDITIONAL_IMAGES) return `You can keep or upload up to ${MAX_ADDITIONAL_IMAGES} additional images.`;
    for (const { file } of newImages) {
      if (!ALLOWED_IMAGE_TYPES.has(file.type)) return "Additional images must be JPEG or PNG files.";
      if (file.size > MAX_IMAGE_SIZE_BYTES) return "Additional images must be 5 MB or smaller.";
    }

    const names = new Set<string>();
    for (const variant of draftVariants) {
      const variantName = variant.name.trim();
      if (!variantName || variantName.length > 80) return "Every variant needs a name of 80 characters or fewer.";
      if (names.has(variantName.toLowerCase())) return "Variant names must be unique within the product.";
      names.add(variantName.toLowerCase());
      if (!Number.isFinite(variant.priceModifier)) return `Price modifier for ${variantName} must be valid.`;
      if (!Number.isInteger(variant.stock) || variant.stock < 0) return `Stock for ${variantName} must be a non-negative integer.`;
    }
    return null;
  };

  const buildPayload = (): ProductEditPayload => {
    const normalizedVariants = draftVariants.map((variant) => ({
      ...variant,
      name: variant.name.trim(),
    }));
    const originals = new Map(variants.map((variant) => [variant.id, variant]));
    const currentIds = new Set(normalizedVariants.map((variant) => variant.id));
    const upsert = normalizedVariants.filter((variant) => {
      const original = originals.get(variant.id);
      return !original || original.name !== variant.name || original.priceModifier !== variant.priceModifier || original.stock !== variant.stock;
    });

    return {
      productId: product.id,
      productPatch: {
        name: draft.name.trim(),
        description: draft.description.trim(),
        basePrice: Number(draft.basePrice),
        isActive: draft.isActive,
        attributes: draft.attributes.map((value) => value.trim()).filter(Boolean),
        variants: normalizedVariants,
      },
      variantOperations: {
        upsert,
        deleteIds: variants.map(({ id }) => id).filter((id): id is string => Boolean(id && !currentIds.has(id))),
      },
      imageOperations: {
        cover: { currentUrl: product.imageURL, replacementFile: coverReplacement },
        small: { currentUrl: product.productImageUrl, replacementFile: smallReplacement },
        additional: {
          retainedUrls: retainedImages,
          addedFiles: newImages.map(({ file }) => file),
          deletedUrls: (product.additionalImages || []).filter((url) => !retainedImages.includes(url)),
        },
      },
    };
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!isDirty || isSaving) return;
    const error = validate();
    if (error) {
      setFormError(error);
      return;
    }
    setIsSaving(true);
    setFormError(null);
    try {
      await onSave(buildPayload());
      onClose();
    } catch (error) {
      console.error("Failed to process product edit payload:", error);
      setFormError("Failed to process product edits. Please try again.");
    } finally {
      setIsSaving(false);
    }
  };

  const confirmDiscard = () => {
    const action = discardAction;
    setDiscardAction(null);
    if (action === "close") onClose();
    if (action === "cancel-edit") onCancel();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm" onClick={(event) => { if (event.target === event.currentTarget) attemptClose(); }}>
      <form className="relative flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-base-200 bg-base-100 shadow-2xl" role="dialog" aria-modal="true" aria-labelledby="product-edit-title" onSubmit={handleSubmit}>
        <header className="flex items-start justify-between gap-3 border-b border-base-200 p-6 pb-3">
          <div className="min-w-0"><div className="flex flex-wrap items-center gap-2"><h2 id="product-edit-title" className="truncate text-xl font-extrabold sm:text-2xl">{draft.name || product.name}</h2><span className={`badge ${draft.isActive ? "badge-success" : "badge-ghost"}`}>{draft.isActive ? "Active" : "Inactive"}</span><span className="badge badge-warning badge-outline">Editing</span></div><p className="mt-1 break-all font-mono text-xs text-base-content/50">Product ID: {product.id}</p></div>
          <button ref={closeButtonRef} type="button" className="btn btn-circle btn-ghost text-lg font-bold" disabled={isSaving} aria-label="Close product editor" onClick={attemptClose}>✕</button>
        </header>

        <main className="flex flex-col gap-6 overflow-y-auto p-6">
          <section className="grid grid-cols-1 gap-3 rounded-xl bg-base-200/40 p-4 sm:grid-cols-2">
            <label className="fieldset"><span className="fieldset-legend">Product Name</span><input className="input w-full" value={draft.name} maxLength={120} required onChange={(e) => { setDraft({ ...draft, name: e.target.value }); setFormError(null); }} /></label>
            <label className="fieldset"><span className="fieldset-legend">Base Price</span><input type="number" className="input w-full" value={draft.basePrice} min="0" step="0.01" required onChange={(e) => { setDraft({ ...draft, basePrice: e.target.value }); setFormError(null); }} /></label>
            <label className="fieldset sm:col-span-2"><span className="fieldset-legend">Description</span><textarea className="textarea h-28 w-full" value={draft.description} maxLength={2000} required onChange={(e) => { setDraft({ ...draft, description: e.target.value }); setFormError(null); }} /></label>
            <label className="flex cursor-pointer items-center justify-between rounded-lg border border-base-300 bg-base-100 p-3 sm:col-span-2"><span><span className="block text-sm font-bold">Active Product</span><span className="text-xs text-base-content/50">Controls product availability.</span></span><input type="checkbox" className="toggle toggle-success" checked={draft.isActive} onChange={(e) => setDraft({ ...draft, isActive: e.target.checked })} /></label>
          </section>

          <section className="flex flex-col gap-3">
            <h3 className="font-bold">Product Images</h3>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {[
                { label: "Cover Image", current: product.imageURL, file: coverReplacement, setFile: setCoverReplacement },
                { label: "Small / Cart Image", current: product.productImageUrl, file: smallReplacement, setFile: setSmallReplacement },
              ].map(({ label, current, file, setFile }) => <div key={label} className="overflow-hidden rounded-xl border border-base-200"><div className="border-b border-base-200 bg-base-200/50 px-3 py-2 text-xs font-bold uppercase">{label}</div><ImagePreview url={current} file={file} alt={`${label} preview`} /><div className="flex gap-2 p-3"><label className="btn btn-outline btn-sm">Replace<input type="file" className="hidden" accept="image/jpeg,image/png" onChange={(e) => { setFile(e.target.files?.[0] || null); e.target.value = ""; }} /></label>{file && <button type="button" className="btn btn-ghost btn-sm" onClick={() => setFile(null)}>Undo</button>}</div></div>)}
            </div>
            <div className="flex items-center justify-between gap-2"><div><h4 className="text-sm font-bold">Additional Images</h4><p className="text-xs text-base-content/50">{retainedImages.length + newImages.length}/{MAX_ADDITIONAL_IMAGES} images</p></div><label className="btn btn-outline btn-sm">+ Add Photos<input type="file" className="hidden" accept="image/jpeg,image/png" multiple onChange={(e) => { setNewImages([...newImages, ...Array.from(e.target.files || []).map((file) => ({ id: crypto.randomUUID(), file }))]); e.target.value = ""; }} /></label></div>
            {retainedImages.length + newImages.length === 0 ? <p className="rounded-lg border border-dashed border-base-300 p-3 text-sm text-base-content/50">No additional images.</p> : <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">{retainedImages.map((url, index) => <div key={url} className="relative overflow-hidden rounded-xl border"><ImagePreview url={url} alt={`Additional image ${index + 1}`} className="aspect-square w-full" /><button type="button" className="btn btn-circle btn-error btn-sm absolute right-2 top-2 text-white" aria-label={`Delete additional image ${index + 1}`} onClick={() => setRetainedImages(retainedImages.filter((item) => item !== url))}>✕</button></div>)}{newImages.map(({ id, file }, index) => <div key={id} className="relative overflow-hidden rounded-xl border border-primary/40"><ImagePreview file={file} alt={`New additional image ${index + 1}`} className="aspect-square w-full" /><span className="badge badge-primary absolute left-2 top-2">New</span><button type="button" className="btn btn-circle btn-error btn-sm absolute right-2 top-2 text-white" aria-label={`Remove new image ${index + 1}`} onClick={() => setNewImages(newImages.filter((image) => image.id !== id))}>✕</button></div>)}</div>}
          </section>

          <section className="flex flex-col gap-3">
            <div className="flex items-center justify-between"><h3 className="font-bold">Attributes</h3><button type="button" className="btn btn-outline btn-sm" onClick={() => setDraft({ ...draft, attributes: [...draft.attributes, ""] })}>+ Add Attribute</button></div>
            {draft.attributes.length === 0 ? <p className="rounded-lg border border-dashed border-base-300 p-3 text-sm text-base-content/50">No attributes.</p> : draft.attributes.map((attribute, index) => <div key={index} className="flex gap-2"><input className="input w-full" value={attribute} placeholder={`Attribute ${index + 1}`} onChange={(e) => setDraft({ ...draft, attributes: draft.attributes.map((value, i) => i === index ? e.target.value : value) })} /><button type="button" className="btn btn-ghost text-error" onClick={() => setDraft({ ...draft, attributes: draft.attributes.filter((_, i) => i !== index) })}>Remove</button></div>)}
          </section>

          <section className="flex flex-col gap-3">
            <div className="flex items-center justify-between"><div><h3 className="font-bold">Variants &amp; Stock</h3><p className="text-xs text-base-content/50">{draftVariants.length} variant(s)</p></div><button type="button" className="btn btn-outline btn-sm" onClick={() => setDraftVariants([...draftVariants, { id: crypto.randomUUID(), name: "", priceModifier: 0, stock: 0 }])}>+ Add Variant</button></div>
            {draftVariants.length === 0 ? <p className="rounded-lg border border-dashed border-base-300 p-3 text-sm text-base-content/50">No variants.</p> : <div className="grid grid-cols-1 gap-3 md:grid-cols-2">{draftVariants.map((variant, index) => <CreateNewVariant key={variant.id} index={index} variant={variant} onChange={(updated) => setDraftVariants(draftVariants.map((item) => item.id === variant.id ? updated : item))} onClose={() => setDraftVariants(draftVariants.filter((item) => item.id !== variant.id))} />)}</div>}
          </section>
        </main>

        <footer className="border-t border-base-200 bg-base-100 p-4">{formError && <div className="alert alert-error mb-3 text-sm"><span>{formError}</span></div>}<div className="flex flex-col-reverse gap-2 sm:flex-row sm:justify-end"><button type="button" className="btn btn-outline" disabled={isSaving} onClick={() => isDirty ? setDiscardAction("cancel-edit") : onCancel()}>Cancel Edit</button><button type="submit" className="btn btn-primary" disabled={!isDirty || isSaving}>{isSaving ? <><span className="loading loading-spinner loading-sm" />Saving...</> : "Save Edits"}</button></div></footer>
      </form>

      {discardAction && <div className="fixed inset-0 z-60 flex items-center justify-center bg-black/60 p-4"><div className="flex w-full max-w-sm flex-col gap-4 rounded-2xl border border-base-200 bg-base-100 p-6 shadow-2xl" role="alertdialog" aria-modal="true" aria-labelledby="discard-product-edit-title"><h3 id="discard-product-edit-title" className="text-lg font-bold text-error">⚠️ Discard Unsaved Changes?</h3><p className="text-sm text-base-content/70">You have unsaved product edits. Are you sure you want to discard them?</p><div className="flex justify-end gap-2"><button type="button" className="btn btn-ghost btn-sm" onClick={() => setDiscardAction(null)}>Keep Editing</button><button type="button" className="btn btn-error btn-sm text-white" onClick={confirmDiscard}>Discard Changes</button></div></div></div>}
    </div>
  );
};

export default ProductDetailsEditModal;
