const Utils = require("../helpers/Utils.js");

class AppScreen {
  constructor(element) {
    Utils.waitForIsShown($(element));
  }
}

module.exports = AppScreen;
