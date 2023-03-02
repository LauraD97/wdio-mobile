const TabBar = require("../screenobjects/components/TabBar.js");
const Picker = require("../screenobjects/components/Picker.js");
const NativeAlert = require("../screenobjects/components/NativeAlert.js");

describe("WebdriverIO and Appium, when interacting with forms", () => {
  let homeScreen;
  let formsScreen;

  beforeEach(async () => {
    await TabBar.waitForTabBarShown();
    homeScreen = await TabBar.goHomeScreen();
    formsScreen = await TabBar.goFormsScreen();
  });

  it("Should be able to enter to the Forms view", async () => {
    await expect(await TabBar.formsOptionIsSelected()).to.be.true;
  });

  it("Input behavior should be working as intended", async () => {
    await formsScreen.typeOnInput("Test");
    await expect(await formsScreen.getInputReviewText()).equal("Test");
  });

  it("Picker should be working as intended", async () => {
    await formsScreen.tapOnPicker();
    await expect(await Picker.pickerIsDisplayed()).to.be.true;
    await expect(await Picker.getOptionsAmount()).equal(3);
    await Picker.tapOnDefaultOption();
  });

  it("Android native alerts should be functional", async () => {
    await formsScreen.tapOnActiveButton();
    await expect(await NativeAlert.alertDisplayed()).to.be.true;
  });
});
