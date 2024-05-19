const homePage = require("../../pageobjects/homePage");
const storePage = require("../../pageobjects/storePage");
const giftCardPage = require("../../pageobjects/giftCardPage");
const localeSwitcher = require("../../pageobjects/components/localeSwitcher");
const globalNavMenu = require("../../pageobjects/components/globalNavMenu");
const { LINK_NAME, INPUT_NAME, TEXT, CREDENTIALS } = require("../../helpers/constants");
const giftCardTestCases = require("../../testData/giftCardTestCases.v1");

describe("Gift card", () => {
   beforeEach(() => {
      homePage.navigate("https://www.apple.com/");
      localeSwitcher.closeLocaleSwitcher();
      homePage.click(globalNavMenu.getNavMenuLinks(LINK_NAME.STORE));
      storePage.click(storePage.getCardsScrollerItem(1, 11));
      giftCardPage.click(giftCardPage.buyButton);
      giftCardPage.clickExist(giftCardPage.getGiftCardTypeSelector(2));
   });

   it(`Should contain text '${CREDENTIALS.NAME2}${TEXT.GIFT_PREVIEW}' in Gift card preview message`, () => {
      giftCardPage.clickExist(giftCardPage.getGiftCardThemeSelector(5));
      giftCardPage.clickExist(giftCardPage.getChooseAmountButton(25));
      giftCardPage.type(giftCardPage.getDeliveryDetailsInput(INPUT_NAME.RECIPIENT_NAME), CREDENTIALS.NAME1);
      giftCardPage.type(giftCardPage.getDeliveryDetailsInput(INPUT_NAME.RECIPIENT_EMAIL), CREDENTIALS.APPLE_ID);
      giftCardPage.type(giftCardPage.getDeliveryDetailsInput(INPUT_NAME.SENDER_NAME), CREDENTIALS.NAME2);
      giftCardPage.type(giftCardPage.getDeliveryDetailsInput(INPUT_NAME.SENDER_EMAIL), CREDENTIALS.APPLE_ID);
      giftCardPage.clickEmpty();
      giftCardPage.invokeTextVisible(giftCardPage.giftCardPreviewMessage).should("contain", CREDENTIALS.NAME2 + TEXT.GIFT_PREVIEW);
   });

   giftCardTestCases.forEach(
      ({ testDescription, themeIndex, amountIndex, inputName, errorInputId, errorMessage }) => {
         it(`Should contain error message '${errorMessage}' with ${testDescription}`, () => {
            giftCardPage.clickExist(giftCardPage.getGiftCardThemeSelector(themeIndex));
            giftCardPage.clickExist(giftCardPage.getChooseAmountButton(amountIndex));
            giftCardPage.click(giftCardPage.getDeliveryDetailsInput(inputName));
            giftCardPage.clickEmpty();
            giftCardPage
               .invokeTextVisible(giftCardPage.getErrorInputMessage(errorInputId))
               .should("contain", errorMessage);
         });
      }
   );
});
