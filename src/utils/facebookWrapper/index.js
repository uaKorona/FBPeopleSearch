const $script = require('scriptjs');

const FACEBOOK_API_URL = '//connect.facebook.net/en_US/sdk/debug.js';
// const config = { appId: '652346414964497', xfbml: false, version: 'v2.8' }; /** test */
const config = { appId: '652341541631651', xfbml: false, version: 'v2.8' }; /** real */

/* eslint-disable no-undef*/
console.log('FB_CONFIG', FB_CONFIG);
/* eslint-enable no-undef*/

class FacebookWrapper {
  static convertLoginStatus(status) {
    let checkingResult;

    switch (status) {
      case 'connected':
        checkingResult = true;
        break;
      case 'not_authorized':
        checkingResult = false;
        /** The person is logged into Facebook, but not your app.
         * Please log into this app.
         * */
        break;
      default:
        checkingResult = false;
        /** console.log('The person is not logged into Facebook. Please log into Facebook'); */
    }

    return checkingResult;
  }

  core = {};
  permissions = {};

  initCore() {
    return new Promise((resolve, reject) => {
      $script(FACEBOOK_API_URL, () => {
        if (global.FB) {
          this.core = global.FB;
          this.core.init(config);
          resolve();
        } else {
          reject('FB does not loaded');
        }
      });
    });
  }

  getAuthStatus() {
    return new Promise((resolve, reject) => this.core.getLoginStatus((response) => {
      const status = FacebookWrapper.convertLoginStatus(response && response.status);

      if (status) {
        return resolve(status);
      }

      return reject();
    }),
    );
  }

  login() {
    return new Promise((resolve, reject) => {
      this.core.login((response) => {
        const status = FacebookWrapper.convertLoginStatus(response && response.status);

        if (status) {
          return resolve(status);
        }

        return reject('Cannot connect with Facebook. Sorry ... ');
      });
    });
  }

  logout() {
    return new Promise((resolve) => {
      if (this.core.logout) {
        this.core.logout(() => resolve());
      }

      return resolve();
    });
  }

  getProfile() {
    return new Promise((resolve) => {
      this.core.api('/me', 'GET', { fields: 'id,name' }, response => resolve(response));
    });
  }

}

const fb = new FacebookWrapper();
export default fb;
