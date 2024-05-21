const BasePage = require('../basePage');

class LocaleSwitcher extends BasePage {
    get closeButton() {
        return cy.get('button#ac-ls-close');
    }
}

module.exports = new LocaleSwitcher();