const BasePage = require('../basePage');

class GlobalNavMenu extends BasePage {
    getNavMenuButton(bttnName) {
        return cy.get(`#globalnav-menubutton-link-${bttnName}`);
    }

    getNavMenuLinks(linkName) {
        return cy.get(`[data-globalnav-item-name="${linkName}"]`);
    }

    openSubMenu(linkName) {
        this.getNavMenuLinks(linkName).trigger('mouseover');
    }
}

module.exports = new GlobalNavMenu();