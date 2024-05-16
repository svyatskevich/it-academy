const BasePage = require('./basePage')

class ChooseCountryRegionPage extends BasePage {
    async getCountryListItem(itemName) {
        return $(`//li[@typeof="schema:Country"]//*[text() = '${itemName}']`);
    }
}

module.exports = ChooseCountryRegionPage;
