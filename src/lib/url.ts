/**
 * Construit une URL interne en respectant la base Astro (/lesursulines).
 * Usage: url("carte") -> "/lesursulines/carte"
 *        url("/")     -> "/lesursulines/"
 */
export function url(path: string = ""): string {
  const base = import.meta.env.BASE_URL.endsWith("/")
    ? import.meta.env.BASE_URL
    : `${import.meta.env.BASE_URL}/`;
  const clean = path.replace(/^\/+/, "");
  return `${base}${clean}`;
}

/**
 * URL d'asset dans /public.
 * Usage: asset("images/facade.webp") -> "/lesursulines/images/facade.webp"
 */
export function asset(path: string): string {
  return url(path);
}
