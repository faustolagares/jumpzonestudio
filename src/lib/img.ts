// Local /images/*.png assets have pre-generated, resized WebP siblings
// (see public/images/*.webp) that are ~95% smaller. We rewrite the src to the
// WebP version so browsers download a few dozen KB instead of multi-MB PNGs.
//
// External URLs (e.g. Cloudflare Images) are returned untouched.
export function optimizedSrc(src: string, _width?: number): string {
  if (src.startsWith('/images/') && src.endsWith('.png')) {
    return src.replace(/\.png$/, '.webp');
  }
  return src;
}

// srcSet is unnecessary now that each image is a single right-sized WebP.
export function optimizedSrcSet(_src?: string, _width?: number): string | undefined {
  return undefined;
}
