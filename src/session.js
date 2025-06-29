import * as utils from './utils';

/**
 * The current session ID stored in memory.
 * Initialized from sessionStorage if available.
 *
 * @type {string | null}
 */
export let sessionID = getSessionID();

/**
 * Retrieves the session ID stored in sessionStorage under the key 'randomId'.
 * Returns null if sessionStorage is not available or no ID is stored.
 *
 * @returns {string | null} The stored session ID or null if not found.
 */
export function getSessionID() {
  if (typeof sessionStorage === 'undefined') return null;
  return sessionStorage.getItem('randomId');
}

/**
 * Sets the current session ID both in the sessionID variable and in sessionStorage.
 *
 * @param {string} id - The session ID to set.
 */
export function setSessionID(id) {
  sessionID = id;
  if (typeof sessionStorage !== 'undefined') {
    sessionStorage.setItem('randomId', id);
  }
}

/**
 * Generates and returns a unique session ID. If an existing session ID
 * is found, it will be returned; otherwise, a new hash will be generated.
 *
 * @returns {string} The unique session ID
 * @async
 */
export async function generateSessionId() {
  const hash = getSessionID() || utils.generateHash();
  setSessionID(hash);
  return hash;
}
