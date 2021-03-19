import * as utils from './utils';

export let sessionID = sessionStorage.getItem('randomId');

generateSessionIdIfNotExist();

function generateSessionIdIfNotExist() {
  (async () => {
    !sessionID && sessionStorage.setItem('randomId', await utils.generateHash());
  })();
}

export function getSessionId() {
  generateSessionIdIfNotExist();
  return sessionStorage.getItem('randomId');
}
