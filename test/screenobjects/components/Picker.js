const Utils = require("../../helpers/Utils.js");

class Picker {
  static async pickerIsDisplayed() {
    await Utils.waitForIsShown($("android.widget.ListView"));
    return await $("android.widget.ListView").isDisplayed();
  }

  static async getOptionsAmount() {
    const selector =
      'new UiSelector().resourceId("android:id/text1").checked(false)';
    const pickerOptions = $$(`android=${selector}`);
    return pickerOptions.length;
  }

  static async tapOnDefaultOption() {
    const selector =
      'new UiSelector().resourceId("android:id/text1").checked(true)';
    const defaultOption = $(`android=${selector}`);
    await Utils.tapOn(defaultOption);
  }
}

module.exports = Picker;
