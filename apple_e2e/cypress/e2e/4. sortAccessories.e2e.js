const homePage = require("../../pageobjects/homePage");
const searchPage = require("../../pageobjects/searchPage");
const localeSwitcher = require("../../pageobjects/components/localeSwitcher");
const globalNavMenu = require("../../pageobjects/components/globalNavMenu");
const globalNavSubMenu = require("../../pageobjects/components/globalNavSubMenu");
const accessoriesSorts = require("../../pageobjects/components/accessoriesSorts");
const accessoriesContainer = require("../../pageobjects/components/accessoriesContainer");
const { BTTN_NAME, ITEM_NAME, TEXT } = require("../../helpers/constants");

describe("Accessories sorting", () => {
   beforeEach(() => {
      homePage.navigate("https://www.apple.com/");
      localeSwitcher.closeLocaleSwitcher();
      homePage.click(globalNavMenu.getNavMenuButton(BTTN_NAME.SEARCH));
      globalNavSubMenu.goToSearchResultPage(TEXT.IPHONE);
      searchPage.click(searchPage.getTabNavItem(ITEM_NAME.ACCESSORIES));
      searchPage.click(accessoriesContainer.accessoriesSortButton);
   });

   [
      {
         sortItem: ITEM_NAME.BY_PRICE_HL,
         description: "High to Low",
         comparator: (price1, price2) => price1 >= price2,
      },
      {
         sortItem: ITEM_NAME.BY_PRICE_LH,
         description: "Low to High",
         comparator: (price1, price2) => price1 <= price2,
      },
   ].forEach(({ sortItem, description, comparator }) => {
      it(`Accessories should be sorted by price ${description}`, () => {
         searchPage.click(accessoriesSorts.getAccessoriesSortListItem(sortItem));
         accessoriesSorts
            .invokeTextVisible(accessoriesSorts.selectedSortItem)
            .should("contain", `Price: ${description}`);
         accessoriesContainer.getPriceOfAccessoriesItem(1).then((price1) => {
            accessoriesContainer.getPriceOfAccessoriesItem(2).then((price2) => {
               expect(comparator(price1, price2)).to.be.true;
            });
         });
      });
   });
});
