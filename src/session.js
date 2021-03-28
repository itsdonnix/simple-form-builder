import * as utils from './utils';

export let sessionID = getSessionID();

export function getSessionID() {
  return sessionStorage.getItem('randomId');
}

export async function generateSessionId() {
  const hash = await utils.generateHash();
  !getSessionID() && sessionStorage.setItem('randomId', hash);
  return hash;
}
