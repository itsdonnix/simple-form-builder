import * as utils from './utils';

export let sessionID = sessionStorage.getItem('randomId');

(async () => {
  !sessionID && sessionStorage.setItem('randomId', await utils.generateHash());
})();

export function getSessionId() {
  return sessionStorage.getItem('randomId');
}
