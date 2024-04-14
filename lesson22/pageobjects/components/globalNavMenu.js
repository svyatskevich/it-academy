const BasePage = require('../basePage');


class GlobalNavMenu extends BasePage {

    getNavMenuButton(BTTN_NAME) {
        return cy.get(`#globalnav-menubutton-link-${BTTN_NAME}`);
    }

    clickButton(BTTN_NAME) {
        this.getNavMenuButton(BTTN_NAME).should('be.visible').click();
    }

    getNavMenuLinks(LINK_NAME) {
        return cy.get(`[data-globalnav-item-name="${LINK_NAME}"]`);
    }

    goToNavMenuItem(LINK_NAME) {
        this.getNavMenuLinks(LINK_NAME).should('be.visible').click();
    }

    openSubMenu(LINK_NAME) {
        this.getNavMenuLinks(LINK_NAME).trigger('mouseover');
    }
}

module.exports = new GlobalNavMenu();