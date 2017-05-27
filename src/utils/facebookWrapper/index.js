const $script = require('scriptjs');

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
    /* eslint-disable no-undef*/
    return new Promise((resolve, reject) => {
      $script(FB_CONFIG.api, () => {
        if (global.FB) {
          this.core = global.FB;
          this.core.init(FB_CONFIG.config);
          resolve();
        } else {
          reject('FB does not loaded');
        }
      });
    });
    /* eslint-enable no-undef*/
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
