import * as utils from './utils';

export let sessionID = getSessionID();

export function getSessionID() {
  return sessionStorage.getItem('randomId');
}

export function setSessionID(id) {
  sessionID = id;
  sessionStorage.setItem('randomId', id);
}

export async function generateSessionId() {
  const hash = getSessionID() || utils.generateHash();
  setSessionID(hash);
  return hash;
}
