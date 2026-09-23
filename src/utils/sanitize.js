/**
 * Sanitization & Defensive Programming Utilities
 * Protects against XSS, script injection, and unsafe URI schemes.
 */

const ALLOWED_PROTOCOLS = new Set(["http:", "https:", "mailto:", "tel:"]);

/**
 * Strips HTML tags and script elements from input strings to prevent XSS.
 * @param {any} input
 * @returns {string}
 */
export function sanitizeText(input) {
  if (typeof input !== "string") {
    return "";
  }
  return input
    .replace(/<[^>]*>?/gm, "") // Strip HTML tags
    .replace(/javascript:/gi, "") // Remove inline javascript pseudo-protocol
    .trim();
}

/**
 * Validates and sanitizes email input strings.
 * @param {string} email
 * @returns {string}
 */
export function sanitizeEmail(email) {
  if (typeof email !== "string") return "";
  const cleaned = sanitizeText(email).toLowerCase();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(cleaned) ? cleaned : "";
}

/**
 * Validates and sanitizes URLs against dangerous schemes like javascript: or data:
 * @param {string} url
 * @param {string} fallback
 * @returns {string}
 */
export function sanitizeUrl(url, fallback = "#") {
  if (!url || typeof url !== "string") {
    return fallback;
  }

  const trimmed = url.trim();

  // Allow in-page hash anchors
  if (trimmed.startsWith("#")) {
    return trimmed;
  }

  // Allow relative paths
  if (trimmed.startsWith("/")) {
    return trimmed;
  }

  try {
    const parsed = new URL(trimmed, window.location.origin);
    if (ALLOWED_PROTOCOLS.has(parsed.protocol)) {
      return trimmed;
    }
    return fallback;
  } catch {
    // If URL parsing fails, verify it's a safe relative or mailto string
    if (/^[a-zA-Z0-9_.~:/?#[\]@!$&'()*+,;=-]+$/.test(trimmed)) {
      return trimmed;
    }
    return fallback;
  }
}

/**
 * Validates and returns a safe mailto: link for email handles.
 * @param {string} email
 * @returns {string}
 */
export function sanitizeMailto(email) {
  if (!email || typeof email !== "string") return "#";
  const cleaned = sanitizeText(email);
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(cleaned) ? `mailto:${cleaned}` : "#";
}
