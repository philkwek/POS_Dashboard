import React, { useEffect, useState } from "react";
import { collection, doc, writeBatch } from "firebase/firestore";
import { deleteObject, getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { StoreItemType, StoreItemVariantType } from "@pos-dashboard/shared";
import CreateNewVariant from "../components/CreateNewVariant";
import { db, storage } from "../firebase";
import { convertFirebaseToImageKit } from "../imageKit";

interface CreateNewProductModalProps {
  onClose: () => void;
  onCreated: (product: StoreItemType) => void;
}

const MAX_IMAGE_SIZE_BYTES = 5 * 1024 * 1024;
const MAX_ADDITIONAL_IMAGES = 10;
const ALLOWED_IMAGE_TYPES = new Set(["image/jpeg", "image/png"]);

const getImageExtension = (file: File) =>
  file.type === "image/png" ? "png" : "jpg";

const CreateNewProductModal: React.FC<CreateNewProductModalProps> = ({
  onClose,
  onCreated,
}) => {
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [basePrice, setBasePrice] = useState("");
  const [coverImage, setCoverImage] = useState<File | null>(null);
  const [smallImage, setSmallImage] = useState<File | null>(null);
  const [additionalImages, setAdditionalImages] = useState<File[]>([]);
  const [variants, setVariants] = useState<StoreItemVariantType[]>([]);
  const [showConfirmExit, setShowConfirmExit] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const isFormDirty =
    productName.trim() !== "" ||
    productDescription.trim() !== "" ||
    basePrice.trim() !== "" ||
    variants.length > 0 ||
    coverImage !== null ||
    smallImage !== null ||
    additionalImages.length > 0;

  const handleAddVariant = () => {
    setVariants((prev) => [...prev, { name: "", priceModifier: 0, stock: 0 }]);
  };

  const handleRemoveLastVariant = () => setVariants((prev) => prev.slice(0, -1));

  const handleRemoveVariantAtIndex = (index: number) => {
    setVariants((prev) => prev.filter((_, i) => i !== index));
  };

  const handleVariantChange = (index: number, updated: StoreItemVariantType) => {
    setVariants((prev) => prev.map((v, i) => (i === index ? updated : v)));
  };

  const handleAttemptClose = () => {
    if (isSubmitting) return;
    if (isFormDirty) setShowConfirmExit(true);
    else onClose();
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      if (showConfirmExit) setShowConfirmExit(false);
      else handleAttemptClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isFormDirty, isSubmitting, showConfirmExit]);

  const validateImage = (file: File, label: string) => {
    if (!ALLOWED_IMAGE_TYPES.has(file.type)) return `${label} must be a JPEG or PNG image.`;
    if (file.size > MAX_IMAGE_SIZE_BYTES) return `${label} must be 5 MB or smaller.`;
    return null;
  };

  const validateForm = () => {
    const trimmedName = productName.trim();
    const trimmedDescription = productDescription.trim();
    const parsedPrice = Number(basePrice);

    if (!trimmedName || trimmedName.length > 120) return "Product name is required and must be 120 characters or fewer.";
    if (!trimmedDescription || trimmedDescription.length > 2000) return "Product description is required and must be 2,000 characters or fewer.";
    if (!Number.isFinite(parsedPrice) || parsedPrice < 0) return "Base price must be a valid non-negative number.";
    if (!coverImage || !smallImage) return "Both a cover image and a small product image are required.";

    const coverError = validateImage(coverImage, "Cover image");
    if (coverError) return coverError;
    const smallError = validateImage(smallImage, "Small product image");
    if (smallError) return smallError;
    if (additionalImages.length > MAX_ADDITIONAL_IMAGES) return `You can upload up to ${MAX_ADDITIONAL_IMAGES} additional images.`;
    for (const image of additionalImages) {
      const imageError = validateImage(image, "Additional image");
      if (imageError) return imageError;
    }

    const variantNames = new Set<string>();
    for (const variant of variants) {
      const trimmedVariantName = variant.name.trim();
      if (!trimmedVariantName || trimmedVariantName.length > 80) return "Every variant needs a name of 80 characters or fewer.";
      if (variantNames.has(trimmedVariantName.toLowerCase())) return "Variant names must be unique within the product.";
      variantNames.add(trimmedVariantName.toLowerCase());
      if (!Number.isFinite(variant.priceModifier)) return `Price modifier for ${trimmedVariantName} must be a valid number.`;
      if (!Number.isInteger(variant.stock) || variant.stock < 0) return `Starting stock for ${trimmedVariantName} must be a non-negative integer.`;
    }
    return null;
  };

  const uploadImage = async (productId: string, path: string, file: File) => {
    const storageRef = ref(storage, `products/${productId}/${path}`);
    await uploadBytes(storageRef, file, { contentType: file.type });
    const firebaseUrl = await getDownloadURL(storageRef);
    return {
      ref: storageRef,
      url: convertFirebaseToImageKit(firebaseUrl),
    };
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setSubmitError(null);
    const validationError = validateForm();
    if (validationError) {
      setSubmitError(validationError);
      return;
    }
    if (!coverImage || !smallImage) return;

    setIsSubmitting(true);
    const uploadedRefs: ReturnType<typeof ref>[] = [];
    try {
      const productRef = doc(collection(db, "products"));
      const coverUpload = await uploadImage(productRef.id, `cover.${getImageExtension(coverImage)}`, coverImage);
      uploadedRefs.push(coverUpload.ref);
      const smallUpload = await uploadImage(productRef.id, `small.${getImageExtension(smallImage)}`, smallImage);
      uploadedRefs.push(smallUpload.ref);

      const additionalUploads: string[] = [];
      for (const [index, image] of additionalImages.entries()) {
        const imageUpload = await uploadImage(productRef.id, `additional/${index}-${crypto.randomUUID()}.${getImageExtension(image)}`, image);
        uploadedRefs.push(imageUpload.ref);
        additionalUploads.push(imageUpload.url);
      }

      const variantRecords = variants.map((variant) => ({
        id: crypto.randomUUID(),
        name: variant.name.trim(),
        priceModifier: variant.priceModifier,
        stock: variant.stock,
      }));
      const productData = {
        attributes: [],
        variants: variantRecords,
        basePrice: Number(basePrice),
        description: productDescription.trim(),
        imageURL: coverUpload.url,
        productImageUrl: smallUpload.url,
        additionalImages: additionalUploads,
        isActive: true,
        name: productName.trim(),
      };

      const batch = writeBatch(db);
      batch.set(productRef, productData);
      for (const variant of variantRecords) {
        batch.set(doc(collection(productRef, "variants"), variant.id), variant);
      }
      await batch.commit();
      onCreated({ id: productRef.id, ...productData });
      onClose();
    } catch (error) {
      await Promise.allSettled(uploadedRefs.map((uploadedRef) => deleteObject(uploadedRef)));
      console.error("Failed to create product:", error);
      setSubmitError(error instanceof Error ? error.message : "Failed to create product. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm" onClick={(event) => { if (event.target === event.currentTarget) handleAttemptClose(); }}>
      <div className="relative flex max-h-[90vh] w-full max-w-xl flex-col gap-2 overflow-y-auto rounded-2xl border border-base-200 bg-base-100 p-6 shadow-2xl">
        <div className="flex items-start justify-between border-b border-base-200 pb-3">
          <h2 className="text-xl font-extrabold text-base-content sm:text-2xl">Create New Product</h2>
          <button type="button" onClick={handleAttemptClose} disabled={isSubmitting} className="btn btn-circle btn-ghost text-lg font-bold" aria-label="Close modal">✕</button>
        </div>

        <form className="flex w-full flex-col gap-2" onSubmit={handleSubmit}>
          <fieldset className="fieldset w-full"><legend className="fieldset-legend">Product Name</legend><input type="text" className="input w-full" placeholder="Enter Product Name" value={productName} onChange={(event) => setProductName(event.target.value)} maxLength={120} required /></fieldset>
          <fieldset className="fieldset w-full"><legend className="fieldset-legend">Product Description</legend><textarea className="textarea h-24 w-full" placeholder="Enter Description Here" value={productDescription} onChange={(event) => setProductDescription(event.target.value)} maxLength={2000} required /></fieldset>
          <fieldset className="fieldset w-full"><legend className="fieldset-legend">Set Product Base Price</legend><input type="number" className="input w-full" placeholder="Enter Base Price" min="0" step="0.01" value={basePrice} onChange={(event) => setBasePrice(event.target.value)} required /></fieldset>

          <fieldset className="fieldset w-full">
            <legend className="fieldset-legend">Create Variant of Product</legend>
            <div className="flex w-full items-start gap-3">
              <div className="sticky top-0 flex flex-col gap-2"><button type="button" onClick={handleAddVariant} className="btn btn-sm btn-outline font-bold" aria-label="Add variant">+</button><button type="button" onClick={handleRemoveLastVariant} disabled={variants.length === 0} className="btn btn-sm btn-outline font-bold text-error disabled:opacity-40" aria-label="Remove last variant">-</button></div>
              <div className="flex w-full flex-1 flex-col gap-3">{variants.length === 0 ? <div className="w-full rounded-lg border border-dashed border-base-300 p-3 text-center text-xs text-base-content/60">No variants added. Click <span className="font-bold">+</span> to create a variant.</div> : variants.map((variant, index) => <CreateNewVariant key={index} index={index} variant={variant} onChange={(updated) => handleVariantChange(index, updated)} onClose={() => handleRemoveVariantAtIndex(index)} />)}</div>
            </div>
          </fieldset>

          <fieldset className="fieldset w-full"><legend className="fieldset-legend">Choose Product Cover Image</legend><input type="file" className="file-input w-full" accept="image/jpeg, image/png" onChange={(event) => setCoverImage(event.target.files?.[0] || null)} required /><label className="label">Required. JPEG or PNG, maximum 5 MB.</label></fieldset>
          <fieldset className="fieldset w-full"><legend className="fieldset-legend">Choose Small Product Image</legend><input type="file" className="file-input w-full" accept="image/jpeg, image/png" onChange={(event) => setSmallImage(event.target.files?.[0] || null)} required /><label className="label">Required. Used in the cart, JPEG or PNG, maximum 5 MB.</label></fieldset>
          <fieldset className="fieldset w-full"><legend className="fieldset-legend">Upload Additional Product Images</legend><input type="file" className="file-input w-full" accept="image/jpeg, image/png" multiple onChange={(event) => setAdditionalImages(Array.from(event.target.files || []))} /><label className="label">Optional. Up to {MAX_ADDITIONAL_IMAGES} images, maximum 5 MB each.</label></fieldset>

          {submitError && <div className="alert alert-error text-sm text-white"><span>{submitError}</span></div>}
          <div className="flex w-full flex-col-reverse gap-2 sm:flex-row"><button type="button" onClick={handleAttemptClose} disabled={isSubmitting} className="btn btn-outline sm:basis-1/3">Cancel</button><button type="submit" disabled={isSubmitting} className="btn btn-primary sm:basis-2/3">{isSubmitting ? <><span className="loading loading-spinner" /> Creating Product...</> : "Create New Product"}</button></div>
        </form>

        {showConfirmExit && <div className="fixed inset-0 z-60 flex items-center justify-center bg-black/60 p-4"><div className="flex w-full max-w-sm flex-col gap-4 rounded-2xl border border-base-200 bg-base-100 p-6 shadow-2xl"><h3 className="text-lg font-bold text-error">⚠️ Discard Unsaved Changes?</h3><p className="text-sm text-base-content/70">You have unsaved product details or variants. Are you sure you want to exit and discard your changes?</p><div className="flex justify-end gap-2 pt-2"><button type="button" onClick={() => setShowConfirmExit(false)} className="btn btn-ghost btn-sm font-semibold">Keep Editing</button><button type="button" onClick={onClose} className="btn btn-error btn-sm font-bold text-white">Discard Changes</button></div></div></div>}
      </div>
    </div>
  );
};

export default CreateNewProductModal;
