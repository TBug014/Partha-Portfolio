/**
 * Prefix a public/ asset URL with the deployment base path.
 *
 * `next/link` and `next/image` apply `basePath` themselves; a plain <a href> to
 * a file in public/ does not. Without this the resume link 404s when the site is
 * served from https://<user>.github.io/<repo>.
 */
export function asset(path: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  return `${base}${path}`;
}
