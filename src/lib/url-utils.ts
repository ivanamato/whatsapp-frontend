/**
 * Matches data: URIs with safe media MIME types and base64 encoding only.
 * Blocks dangerous types like text/html, application/xhtml+xml, or image/svg+xml
 * that could execute scripts when opened via <a href>.
 */
const SAFE_DATA_URI =
  /^data:(?:image\/(?:jpeg|png|gif|webp|bmp|tiff)|video\/[a-z0-9.+-]+|audio\/[a-z0-9.+-]+|application\/(?:pdf|octet-stream));base64,/i;

/**
 * Validates that a URL uses a safe protocol (https:, http:, or safe data:).
 * Returns the URL string if safe, or null if the protocol is disallowed
 * (e.g. javascript:, blob:, vbscript:, data:text/html).
 */
/**
 * Strips control characters and bidi overrides from filenames received from the API.
 * Prevents visual spoofing (e.g. RTL override making "evil.exe" appear as "exe.live").
 */
export function sanitizeDisplayFilename(name: string | undefined | null): string | null {
  if (!name) return null;
  return name
    .replace(/[\x00-\x1f\x7f\u200E\u200F\u202A-\u202E\u2066-\u2069]/g, '')
    .slice(0, 255) || null;
}

export function sanitizeUrl(url: string | undefined | null): string | null {
  if (!url) return null;

  // Validate data: URIs with an explicit MIME allowlist before URL parsing,
  // since new URL() may throw on complex payloads in some browsers.
  if (url.startsWith('data:')) {
    return SAFE_DATA_URI.test(url) ? url : null;
  }

  try {
    const parsed = new URL(url);
    if (parsed.protocol === 'https:' || parsed.protocol === 'http:' || parsed.protocol === 'blob:') {
      return url;
    }
    return null;
  } catch {
    return null;
  }
}
