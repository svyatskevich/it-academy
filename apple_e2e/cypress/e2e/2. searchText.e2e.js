const homePage = require("../../pageobjects/homePage");
const searchPage = require("../../pageobjects/searchPage");
const localeSwitcher = require("../../pageobjects/components/localeSwitcher");
const globalNavMenu = require("../../pageobjects/components/globalNavMenu");
const globalNavSubMenu = require("../../pageobjects/components/globalNavSubMenu");
const { BTTN_NAME, TEXT } = require("../../helpers/constants");
const { waitForVisible } = require("../../helpers/wait");

describe("Search text", () => {
   beforeEach(() => {
      homePage.navigate("https://www.apple.com/");
      homePage.click(waitForVisible(localeSwitcher.closeButton));
      homePage.click(globalNavMenu.getNavMenuButton(BTTN_NAME.SEARCH));
   });

   it(`Should contain search text "${TEXT.APPLE}" in 1st link of search results`, () => {
      globalNavSubMenu.search(TEXT.APPLE);
      globalNavSubMenu.invokeText(waitForVisible(globalNavSubMenu.getSearchResultLink(1)))
      .should("contain", TEXT.APPLE);
   });

   it(`The search text '${TEXT.APPLE}' on Home page should be contained in search input on Search page`, () => {
      globalNavSubMenu.goToSearchResultPage(TEXT.WATCH);
      searchPage.invokeVal(searchPage.searchInput).should("contain", TEXT.WATCH);
   });

   it(`The search input on Searh page should be reset and not contain search text "${TEXT.IPHONE}"`, () => {
      globalNavSubMenu.goToSearchResultPage(TEXT.IPHONE);
      searchPage.click(searchPage.resetInputButton);
      searchPage.invokeVal(searchPage.searchInput).should("not.contain", TEXT.IPHONE);
   });

   it(`Should contain searh text "${TEXT.WATCH}" in 1st result link in Explore list`, () => {
      globalNavSubMenu.goToSearchResultPage(TEXT.WATCH);
      searchPage.invokeText(waitForVisible(searchPage.getExploreListItem(1)))
      .should("contain", TEXT.WATCH);
   });
});
