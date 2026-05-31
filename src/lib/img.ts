// Builds a Vercel Image Optimization URL for locally-hosted images so the
// browser receives a resized WebP/AVIF instead of the original multi-MB PNG.
//
// - External URLs (e.g. Cloudflare Images) are returned untouched.
// - In dev (`vite`), the optimizer endpoint does not exist, so we pass through.
const IS_PROD =
  typeof import.meta !== 'undefined' &&
  (import.meta as { env?: { PROD?: boolean } }).env?.PROD === true;

export function optimizedSrc(src: string, width: number, quality = 75): string {
  if (!src.startsWith('/images/')) return src;
  if (!IS_PROD) return src;
  return `/_vercel/image?url=${encodeURIComponent(src)}&w=${width}&q=${quality}`;
}

// Returns a `srcSet` string at 1x/2x for crisp rendering on retina screens.
export function optimizedSrcSet(src: string, width: number, quality = 75): string | undefined {
  if (!src.startsWith('/images/') || !IS_PROD) return undefined;
  return `${optimizedSrc(src, width, quality)} 1x, ${optimizedSrc(src, width * 2, quality)} 2x`;
}
