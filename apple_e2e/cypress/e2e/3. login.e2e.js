const homePage = require("../../pageobjects/homePage");
const signInPage = require("../../pageobjects/signInPage");
const localeSwitcher = require("../../pageobjects/components/localeSwitcher");
const globalNavMenu = require("../../pageobjects/components/globalNavMenu");
const globalNavSubMenu = require("../../pageobjects/components/globalNavSubMenu");
const { BTTN_NAME, LINK_NAME, ERROR_MESSAGES, CREDENTIALS } = require("../../helpers/constants");
const { waitForVisible } = require("../../helpers/wait");

describe("Login", () => {
   beforeEach(() => {
      homePage.navigate("https://www.apple.com/");
      homePage.click(waitForVisible(localeSwitcher.closeButton));
      homePage.click(globalNavMenu.getNavMenuButton(BTTN_NAME.BAG));
      homePage.click(globalNavSubMenu.getMyProfileLinks(LINK_NAME.SIGNIN));
   });

   it("The “Remember Me” checkbox should be unchecked.", () => {
      signInPage.uncheckRememberMeCheckbox();
      signInPage.getCheckboxInput().should("not.be.checked");
   });

   it(`Should contain error text “${ERROR_MESSAGES.INCORRECT_CREDENTIALS}” in popup with invalid password.`, () => {
      signInPage.signInToAccount(CREDENTIALS.APPLE_ID, CREDENTIALS.INCORRECT_PASSWORD);
      signInPage.getErrorTextForInvalidPassword().then((text) => {
         expect(signInPage.normalizeSpaces(text)).to.equal(ERROR_MESSAGES.INCORRECT_CREDENTIALS);
      });
   });
});
