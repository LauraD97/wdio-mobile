const Utils = require("../helpers/Utils.js");
const AppScreen = require("./AppScreen.js");

class FormsScreen extends AppScreen {
  get formsView() {
    return $("~Forms-screen");
  }

  get input() {
    return $("~text-input");
  }

  get textReview() {
    return $("~input-text-result");
  }

  get picker() {
    return $("~Dropdown");
  }

  get activeButton() {
    return $("~button-Active");
  }

  constructor() {
    super("~Forms-screen");
  }

  async typeOnInput(text) {
    await Utils.sendKeys(this.input, text);

    if (await driver.isKeyboardShown()) {
      await this.formsView.click();
    }
  }

  async getInputReviewText() {
    return await this.textReview.getText();
  }

  async tapOnPicker() {
    await Utils.tapOn(this.picker);
  }

  async tapOnActiveButton() {
    await Utils.tapOn(this.activeButton);
  }
}

module.exports = FormsScreen;
