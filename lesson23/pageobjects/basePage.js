const BaseElements = require('../helpers/baseElements');

class BasePage extends BaseElements {
    async navigate(url) {
        await browser.url(url);
    }
}

module.exports = BasePage;