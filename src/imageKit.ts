export const IMAGEKIT_CDN_ENDPOINT = "https://ik.imagekit.io/ql2ik0vus";

export function convertFirebaseToImageKit(
  firebaseUrl: string,
  transformation?: string,
): string {
  const marker = "/o/";
  const markerIndex = firebaseUrl.indexOf(marker);

  if (markerIndex === -1) {
    throw new Error('Invalid Firebase Storage URL: missing "/o/" segment.');
  }

  const pathAndQuery = firebaseUrl.substring(markerIndex + marker.length);
  const cleanEndpoint = IMAGEKIT_CDN_ENDPOINT.replace(/\/+$/, "");
  const formattedTransform = transformation
    ? `/${transformation.replace(/^\/+/, "").replace(/^tr:/, "")}`
    : "";

  return `${cleanEndpoint}${formattedTransform}/${pathAndQuery}`;
}
