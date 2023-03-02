module.exports = {
  waitForIsShown: async function (element) {
    return await element.waitForDisplayed();
  },

  tapOn: async function (element) {
    await element.waitForDisplayed();
    await element.click();
  },

  sendKeys: async function (element, value) {
    await element.waitForDisplayed();
    await element.setValue(value);
  },

  changeViewTo: async function (element) {
    await module.exports.tapOn(element);
  },
};
