const $script = require('scriptjs');

const FACEBOOK_API_URL = '//connect.facebook.net/en_US/sdk/debug.js';
const config = { appId: '652346414964497', xfbml: true, version: 'v2.8' };

class FacebookWrapper {
  static convertLoginStatus(status) {
    let checkingResult;

    switch (status) {
      case 'connected':
        checkingResult = true;
        break;
      case 'not_authorized':
        checkingResult = false;
        console.log('The person is logged into Facebook, but not your app. Please log into this app.');
        break;
      default:
        checkingResult = false;
        console.log('The person is not logged into Facebook. Please log into Facebook');
    }

    return checkingResult;
  }

  core = {};
  permissions = {};

  /* constructor() {
    if (global.FB) {
     this.core = global.FB;
     } else {
     throw new Error('FB API does not ready!');
     }
  } */

  initCore() {
    return new Promise (resolve => {
        $script(FACEBOOK_API_URL, () => {
          if (global.FB) {
            this.core = global.FB;
            this.core.init(config);
            resolve();
          } else {
            throw Error('FB does not loaded');
          }
        });
      });

  }

  getAuthStatus() {
    return new Promise(
      resolve => this.core.getLoginStatus((response) => {
        const status = FacebookWrapper.convertLoginStatus(response && response.status);

        if (status) {
          return resolve(status);
        }

        return this.login();
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
      }, this.permissions);
    });
  }
}

const fb = new FacebookWrapper();
export default fb;
