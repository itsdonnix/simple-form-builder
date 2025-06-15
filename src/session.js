import * as utils from './utils';

export let sessionID = getSessionID();

export function getSessionID() {
  return sessionStorage.getItem('randomId');
}

export function setSessionID(id) {
  sessionID = id;
  sessionStorage.setItem('randomId', id);
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
