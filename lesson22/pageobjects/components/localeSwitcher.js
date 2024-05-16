const BasePage = require('../basePage');

class LocaleSwitcher extends BasePage {
      get closeButton() {
        return cy.get('button#ac-ls-close');
    }

    closeLocaleSwitcher() {
        this.closeButton.should('be.visible').click();
    }
}

module.exports = new LocaleSwitcher();