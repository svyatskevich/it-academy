const homePage = require("../../pageobjects/homePage");
const signInPage = require("../../pageobjects/signInPage");
const localeSwitcher = require("../../pageobjects/components/localeSwitcher");
const globalNavMenu = require("../../pageobjects/components/globalNavMenu");
const globalNavSubMenu = require("../../pageobjects/components/globalNavSubMenu");
const { BTTN_NAME, LINK_NAME } = require("../../helpers/constants");
const orderLookUpTestCases = require("../../testData/orderLookUpTestCases.v1");

describe("Order look up", () => {
   beforeEach(() => {
      homePage.navigate("https://www.apple.com/");
      localeSwitcher.closeLocaleSwitcher();
      homePage.click(globalNavMenu.getNavMenuButton(BTTN_NAME.BAG));
      homePage.click(globalNavSubMenu.getMyProfileLinks(LINK_NAME.ORDERS));
   });

   orderLookUpTestCases.forEach(
      ({ testDescription, emptyErrorMessage, invalidErrorMessage, inputName, incorrectValue }) => {
         it(`Should contain error message '${emptyErrorMessage}' with empty ${testDescription} input`, () => {
            signInPage.click(signInPage.getOrderLookUpInput(inputName));
            signInPage.clickEmpty();
            signInPage.invokeTextVisible(signInPage.getOrderLookUpInputError(inputName)).should("contain", emptyErrorMessage);
         });

         it(`Should contain error message '${invalidErrorMessage}' with invalid ${testDescription} input`, () => {
            signInPage.type(signInPage.getOrderLookUpInput(inputName), incorrectValue);
            signInPage.clickEmpty();
            signInPage.invokeTextVisible(signInPage.getOrderLookUpInputError(inputName)).should("contain", invalidErrorMessage);
         });
      }
   );
});
