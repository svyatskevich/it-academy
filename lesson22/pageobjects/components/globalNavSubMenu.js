const BasePage = require('../basePage');

class GlobalNavSubMenu extends BasePage {

    get searchInput() {
        return cy.get("input.globalnav-searchfield-input");
    }

    get signInContainer() {
        return cy.get("#signin-container");
    }

    getMyProfileLinks(LINK_NAME) {
        return cy.get(`a[class*='ac-gn-bagview-nav-link-${LINK_NAME}']`);
    }

    goToMyProfileLinks(LINK_NAME) {
        this.getMyProfileLinks(LINK_NAME).should('be.visible').click();
    }

    search(inputValue) {
        this.searchInput.should('be.visible').click().type(inputValue);
    }

    getSearchResult(itemNumber) {
        return cy.get(`[data-analytics-region="suggested links"] [style*="item-number: ${itemNumber};"]`);
    }

    getTextSearchResult(itemNumber) {
        return this.getSearchResult(itemNumber).should('be.visible').invoke('text');
    }

    getSubMenuLink(LINK_NAME) {
        return cy.get(`.globalnav-submenu-link[data-analytics-title='${LINK_NAME}']`);
    }

    goToSubMenuItem(LINK_NAME) {
        this.getSubMenuLink(LINK_NAME).should('be.visible').click();
    }
}

module.exports = new GlobalNavSubMenu();