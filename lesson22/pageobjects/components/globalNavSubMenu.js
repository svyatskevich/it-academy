const BasePage = require('../basePage');

class GlobalNavSubMenu extends BasePage {

    get searchInput() {
        return cy.get("input.globalnav-searchfield-input");
    }

    get signInContainer() {
        return cy.get("#signin-container");
    }

    getMyProfileLinks(linkName) {
        return cy.get(`a[class*='ac-gn-bagview-nav-link-${linkName}']`);
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

    getSubMenuLink(linkName) {
        return cy.get(`.globalnav-submenu-link[data-analytics-title='${linkName}']`);
    }
}

module.exports = new GlobalNavSubMenu();