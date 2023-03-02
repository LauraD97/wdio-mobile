const Utils = require("../../helpers/Utils.js");
const HomeScreen = require("../HomeScreen.js");
const FormsScreen = require("../FormsScreen.js");

class TabBar {
  static async waitForTabBarShown() {
    return await Utils.waitForIsShown($("~Home"));
  }

  static async goHomeScreen() {
    await Utils.changeViewTo($("~Home"));
    return new HomeScreen();
  }

  static async goFormsScreen() {
    await Utils.changeViewTo($("~Forms"));
    return new FormsScreen();
  }

  static async formsOptionIsSelected() {
    const selector = 'new UiSelector().description("Forms").selected(true)';
    const formsSelected = $(`android=${selector}`);

    await Utils.tapOn($("~Forms"));
    return await formsSelected.isDisplayed();
  }
}

module.exports = TabBar;
