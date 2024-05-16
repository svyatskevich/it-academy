const BasePage = require('../basePage');

class GlobalFooter extends BasePage {
    async getLocaleLink() {
        return $('//*[@class="ac-gf-footer-locale-link"]');
    }
}
module.exports = GlobalFooter;