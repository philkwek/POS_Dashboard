import {
  getDownloadURL,
  ref,
  StorageReference,
  uploadBytes,
} from "firebase/storage";
import { storage } from "./firebase";
import {
  convertFirebaseToImageKit,
  IMAGEKIT_CDN_ENDPOINT,
} from "./imageKit";

export interface UploadedProductImage {
  ref: StorageReference;
  path: string;
  url: string;
}

export const getProductImageExtension = (file: File) =>
  file.type === "image/png" ? "png" : "jpg";

export const uploadProductImage = async (
  productId: string,
  relativePath: string,
  file: File,
): Promise<UploadedProductImage> => {
  const path = `products/${productId}/${relativePath}`;
  const storageRef = ref(storage, path);
  await uploadBytes(storageRef, file, { contentType: file.type });
  const firebaseUrl = await getDownloadURL(storageRef);

  return {
    ref: storageRef,
    path,
    url: convertFirebaseToImageKit(firebaseUrl),
  };
};

export const getProductImageStoragePath = (
  imageKitUrl: string,
  productId: string,
): string | null => {
  try {
    const cdnEndpoint = new URL(IMAGEKIT_CDN_ENDPOINT);
    const imageUrl = new URL(imageKitUrl);
    const endpointPath = cdnEndpoint.pathname.replace(/\/+$/, "");

    if (imageUrl.origin !== cdnEndpoint.origin) return null;
    if (!imageUrl.pathname.startsWith(`${endpointPath}/`)) return null;

    const encodedStoragePath = imageUrl.pathname.slice(endpointPath.length + 1);
    const storagePath = decodeURIComponent(encodedStoragePath);
    const productPrefix = `products/${productId}/`;

    return storagePath.startsWith(productPrefix) ? storagePath : null;
  } catch {
    return null;
  }
};
