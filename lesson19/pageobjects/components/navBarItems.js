const BasePage = require('../basePage');

class NavBarItems extends BasePage {
    get mainHeader() {
        return $('//header/h1');
    }

    async getNavBarPageLink(PAGE_LINK) {
        return $(`//a[@class="navbar__item navbar__link"][@href="/${PAGE_LINK}"]`);
    }

    async navigateToNavBarPage(PAGE_LINK) {
        const navBarPageLink = await this.getNavBarPageLink(PAGE_LINK);
        await navBarPageLink.click();
    }
}

module.exports = new NavBarItems();
