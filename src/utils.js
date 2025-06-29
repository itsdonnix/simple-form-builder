/**
 * Computes the SHA-256 hash of a given message string and returns it as a hex string.
 *
 * @param {string} message - The input string to hash.
 * @returns {Promise<string>} The SHA-256 hash as a hexadecimal string.
 */
export async function digestMessage(message) {
  const msgUint8 = new TextEncoder().encode(message); // encode as (utf-8) Uint8Array
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgUint8); // hash the message
  const hashArray = Array.from(new Uint8Array(hashBuffer)); // convert buffer to byte array
  const hashHex = hashArray.map((b) => b.toString(16).padStart(2, '0')).join(''); // convert bytes to hex string
  return hashHex;
}

/**
 * Generates a SHA-256 hash for the provided date.
 *
 * @param {Date} [date=new Date()] - The date to hash. Defaults to the current date and time.
 * @returns {Promise<string>} A promise that resolves to the SHA-256 hash of the date as a hex string.
 */
export function generateHash(date = new Date()) {
  return digestMessage(date / 0.1);
}
