class FacebookWrapper {
  core = {};

  constructor() {
    if (global.FB) {
      this.core = global.FB;
    }
  }

  getAuthStatus() {
    return new Promise((resolve) => {
      return this.core.getLoginStatus(response => {
        console.log(response);
        // let status = convertLoginStatus(response && response.status);
        resolve(status);
      });
    });
  }

}

export default FacebookWrapper;
