const BasePage = require('../basePage');

class NavBarItems extends BasePage {
    get mainHeader() {
        return $('//header/h1');
    }

    async getNavBarPageLink(pageLink) {
        return $(`//a[@class="navbar__item navbar__link"][@href="/${pageLink}"]`);
    }

    async navigateToNavBarPage(pageLink) {
        const navBarPageLink = await this.getNavBarPageLink(pageLink);
        await navBarPageLink.click();
    }
}

module.exports = new NavBarItems();
