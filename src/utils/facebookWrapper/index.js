class FacebookWrapper {
  core = {};
  permissions = {};

  constructor() {
    if (global.FB) {
      this.core = global.FB;
    }
  }

  getAuthStatus() {
    return new Promise((resolve, reject) => {
      return this.core.getLoginStatus(response => {
        const status = this.convertLoginStatus(response && response.status);

        if (status) {
          return resolve(status);
        }
        return reject(response);

      });
    });
  }

  login() {
    return new Promise((resolve) => {
        this.core.login(() => {
          resolve(); // this code will be run only if user allows permissions
        }, this.permissions);
      });
  }

  convertLoginStatus(status) {
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

}

export default FacebookWrapper;
