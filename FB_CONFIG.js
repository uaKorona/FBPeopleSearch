/**
 * Created by roman.kovalskyi on 5/27/2017.
 */

module.exports = {

  FB_CONFIG_DEV: {
    api: JSON.stringify('//connect.facebook.net/en_US/sdk/debug.js'),
    config: {
      appId: JSON.stringify('652346414964497'),
      xfbml: JSON.stringify(false),
      version: JSON.stringify('v2.8')
    }
  },

  FB_CONFIG_PROD: {
    api: JSON.stringify('//connect.facebook.net/en_US/sdk/debug.js'),
    config: {
      appId: JSON.stringify('652341541631651'),
      xfbml: JSON.stringify(false),
      version: JSON.stringify('v2.8')
    }
  }

};
