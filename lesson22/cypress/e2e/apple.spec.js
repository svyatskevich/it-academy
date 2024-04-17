const mainPage = require('../../pageobjects/mainPage');
const globalNavMenu = require('../../pageobjects/components/globalNavMenu');
const globalNavSubMenu = require('../../pageobjects/components/globalNavSubMenu');
const localeSwitcher = require('../../pageobjects/components/localeSwitcher');
const { BTTN_NAME, LINK_NAME } = require('../../helpers/constants');

describe('Apple test', () => {
    beforeEach(() => {
      mainPage.navigate('https://www.apple.com/');
      localeSwitcher.closeLocaleSwitcher();
    });
  
    it('Should contain url "/iphone" on the "iPhone" page', () => {
      globalNavMenu.goToNavMenuItem(LINK_NAME.IPHONE);
      cy.url().should('include', '/iphone');
    });
  
    it('Should go to "Apple Watch Store" subpage and contain title "Buy Apple Watch"', () => {
      globalNavMenu.openSubMenu(LINK_NAME.WATCH);
      globalNavSubMenu.goToSubMenuItem('shop apple watch');
      cy.title().should('contain', 'Buy Apple Watch');
    });
  
    it('Should contain "Apple" in 1st search result for "Apple" search query', () => {
      globalNavMenu.clickButton(BTTN_NAME.SEARCH);
      globalNavSubMenu.search('Apple');
      globalNavSubMenu.getTextSearchResult(1).should('contain', 'Apple');
    });
  
    it('Should go to "Your Saves" without authorization and have visible SignIn container', () => {
      globalNavMenu.clickButton(BTTN_NAME.BAG);
      globalNavSubMenu.goToMyProfileLinks(LINK_NAME.YOURSAVES);
      globalNavSubMenu.signInContainer.should('be.visible');
    });
  });