const Utils = require("../../helpers/Utils.js");

class NativeAlert {
  static async alertDisplayed() {
    const selector = 'new UiSelector().resourceId("android:id/content")';
    const alert = $(`android=${selector}`);
    await Utils.waitForIsShown(alert);
    return await alert.isDisplayed();
  }
}

module.exports = NativeAlert;
