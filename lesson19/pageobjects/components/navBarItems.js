const BasePage = require('../basePage');

class NavBarItem extends BasePage {
    get mainPageLinkLogo() {
        return $('//a[@class="navbar__brand"]');
    }

    get docsPageLink() {
        return $('//a[@class="navbar__item navbar__link"][@href="/docs/gettingstarted"]');
    }

    get apiPageLink() {
        return $('//a[@class="navbar__item navbar__link"][@href="/docs/api"]');
    }

    get blogPageLink() {
        return $('//a[@class="navbar__item navbar__link"][@href="/blog"]');
    }

    get contributePageLink() {
        return $('//a[@class="navbar__item navbar__link"][@href="/docs/contribute"]');
    }

    get communityPageLink() {
        return $('//a[@class="navbar__item navbar__link"][@href="/community/support"]');
    }

    get sponsorPageLink() {
        return $('//a[@class="navbar__item navbar__link"][@href="/docs/sponsor"]');
    }

    get mainHeader() {
        return $('//header/h1');
    }

    async navigateToPageNavBar(pageName) {
        const navbarSelector = '.navbar__item.navbar__link';
        const linkElement = $(`${navbarSelector}[href="/${pageName}"]`);
        await linkElement.waitForExist();
        await linkElement.click();
    }
}

module.exports = new NavBarItem();
