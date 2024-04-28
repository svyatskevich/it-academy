const mainPage = require('../../pageobjects/mainPage');
const globalNavMenu = require('../../pageobjects/components/globalNavMenu');
const globalNavSubMenu = require('../../pageobjects/components/globalNavSubMenu');
const localeSwitcher = require('../../pageobjects/components/localeSwitcher');
const { BTTN_NAME, LINK_NAME, PAGE_URL, PAGE_TITLE, TEXT } = require('../../helpers/constants');

describe('Apple test', () => {
    beforeEach(() => {
      mainPage.navigate('https://www.apple.com/');
      localeSwitcher.closeLocaleSwitcher();
    });
  
    it('Should contain url "/iphone" on the "iPhone" page', () => {
      mainPage.click(globalNavMenu.getNavMenuLinks(LINK_NAME.IPHONE));
      cy.url().should('include', PAGE_URL.IPHONE);
    });
  
    it('Should go to "Apple Watch Store" subpage and contain title "Buy Apple Watch"', () => {
      globalNavMenu.openSubMenu(LINK_NAME.WATCH);
      mainPage.click(globalNavSubMenu.getSubMenuLink(LINK_NAME.SHOP_APPLEWATCH));
      cy.title().should('contain', PAGE_TITLE.SHOP_APPLEWATCH);
    });
  
    it('Should contain "Apple" in 1st search result for "Apple" search query', () => {
      mainPage.click(globalNavMenu.getNavMenuButton(BTTN_NAME.SEARCH));
      globalNavSubMenu.search(TEXT.APPLE);
      globalNavSubMenu.getTextSearchResult(1).should('contain', TEXT.APPLE);
    });
  
    it('Should go to "Your Saves" without authorization and have visible SignIn container', () => {
      mainPage.click(globalNavMenu.getNavMenuButton(BTTN_NAME.BAG));
      mainPage.click(globalNavSubMenu.getMyProfileLinks(LINK_NAME.YOURSAVES));
      globalNavSubMenu.signInContainer.should('be.visible');
    });
  });