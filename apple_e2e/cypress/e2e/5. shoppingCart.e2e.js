const homePage = require("../../pageobjects/homePage");
const storePage = require("../../pageobjects/storePage");
const localeSwitcher = require("../../pageobjects/components/localeSwitcher");
const globalNavMenu = require("../../pageobjects/components/globalNavMenu");
const { BTTN_NAME, LINK_NAME, TEXT, ATTR } = require("../../helpers/constants");
const productPage = require("../../pageobjects/productPage");

describe("Shopping cart", () => {
   beforeEach(() => {
      homePage.navigate("https://www.apple.com/");
      localeSwitcher.closeLocaleSwitcher();
      homePage.click(globalNavMenu.getNavMenuLinks(LINK_NAME.STORE));
   });

   [
      { sectionIndex: 7, itemPositions: [6] },
      { sectionIndex: 7, itemPositions: [3, 6] },
   ].forEach(({ sectionIndex, itemPositions }) => {
      it(`Should add to cart and Bag Badge should contain count + ${itemPositions.length}`, () => {
         let counter = 0;
         globalNavMenu
            .invokeTextVisible(globalNavMenu.getNavMenuButton(BTTN_NAME.BAG))
            .then((text) => {
               counter = Number(text);
            });

         itemPositions.forEach((itemPosition, index) => {
            storePage.clickExist(storePage.getNextCardsScrollerButton(sectionIndex));
            storePage.clickExist(storePage.getCardsScrollerItem(sectionIndex, itemPosition));
            storePage.clickExist(storePage.addToCartButton);
            if (index !== itemPositions.length - 1) {
               productPage.click(globalNavMenu.getNavMenuLinks(LINK_NAME.STORE));
            }
         });

         storePage
            .invokeAttr(globalNavMenu.getNavMenuButton(BTTN_NAME.BAG), ATTR.ARIA_LABEL)
            .should("contain", TEXT.COUNT_BAG + (counter + itemPositions.length));
      });
   });
});
