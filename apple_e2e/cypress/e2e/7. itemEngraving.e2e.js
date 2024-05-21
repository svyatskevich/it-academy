const homePage = require("../../pageobjects/homePage");
const storePage = require("../../pageobjects/storePage");
const productPage = require("../../pageobjects/productPage");
const localeSwitcher = require("../../pageobjects/components/localeSwitcher");
const globalNavMenu = require("../../pageobjects/components/globalNavMenu");
const engravingPopup = require("../../pageobjects/components/pop-up/engravingPopup");
const accessoriesContainer = require("../../pageobjects/components/accessoriesContainer");
const { LINK_NAME, TEXT, ATTR, ERROR_MESSAGES } = require("../../helpers/constants");
const { waitForExist, waitForVisible } = require("../../helpers/wait");

describe("Item engraving", () => {
   beforeEach(() => {
      homePage.navigate("https://www.apple.com/");
      homePage.click(waitForVisible(localeSwitcher.closeButton));
      homePage.click(globalNavMenu.getNavMenuLinks(LINK_NAME.STORE));
      storePage.click(storePage.getProductNavCardsItem(7));
      storePage.click(accessoriesContainer.getAccessoriesListItem(2));
      productPage.click(waitForExist(productPage.addEngravingButton));
   });

   it("Should contain entered text and selected emoji in 'Your Engraving Message'", () => {
      productPage.type(engravingPopup.engravingInput, TEXT.ENGRAVING_MSG);
      productPage.click(engravingPopup.getEngravingEmojiListItem(2));
      productPage.invokeText(engravingPopup.yourEngravingMessage, ATTR.ARIA_LABEL)
      .should("contain", TEXT.YOUR_ENGRAVING_MSG);
   });

   it("The Engraving input should be reset and not contain entered text and selected emoji", () => {
      productPage.type(engravingPopup.engravingInput, TEXT.ENGRAVING_MSG);
      productPage.click(engravingPopup.getEngravingEmojiListItem(4));
      productPage.click(engravingPopup.resetEngravingInputButton);
      productPage.invokeVal(engravingPopup.engravingInput).should("not.contain", TEXT.ENGRAVING_MSG);
   });

   it(`Should contain error message '${ERROR_MESSAGES.INCORRECT_ENGRAVING_MSG}' with invalid Engraving message`, () => {
      productPage.click(engravingPopup.getEngravingEmojiListItem(4));
      productPage.type(engravingPopup.engravingInput, TEXT.INVALID_ENGRAVING_MSG);
      productPage.click(engravingPopup.getEngravingEmojiListItem(1));
      productPage.invokeText(waitForVisible(engravingPopup.engravingInputError))
      .should("contain", ERROR_MESSAGES.INCORRECT_ENGRAVING_MSG);
   });
});
