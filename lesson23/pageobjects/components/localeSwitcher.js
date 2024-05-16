const BasePage = require('../basePage');

class LocaleSwitcher extends BasePage {
    async getCloseButton() {
        return $('//*[@id="ac-ls-close"]');
    }
}

module.exports = LocaleSwitcher;