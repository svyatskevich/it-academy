const BasePage = require('../basePage');

class GlobalNavSubMenu extends BasePage {
    constructor(page) {
        super(page);
        this.searchInput = page.locator("//input[@class='globalnav-searchfield-input']");
        this.signInContainer = page.locator("#signin-container");
    }

    async getMyProfileLinks(LINK_NAME) {
        return this.page.locator(`//*[@class="ac-gn-bagview-nav-item-wrapper"]//*[contains(text(), "${LINK_NAME}")]`);
    }

    async goToMyProfileLinks(LINK_NAME) {
        await (await this.getMyProfileLinks(LINK_NAME)).isVisible();
        await (await this.getMyProfileLinks(LINK_NAME)).click();
    }

    async search(inputValue) {
        await this.searchInput.click();
        await this.searchInput.fill(inputValue);
        await this.page.keyboard.press('Tab');
    }

    async getSearchResult(itemNumber) {
        return this.page.locator(`//*[contains(text(),'Suggested Links')]/following-sibling::ul/*[contains(@style,"item-number: ${itemNumber};")]`);
    }

    async getTextSearchResult(itemNumber) {
        const searchResult = await this.getSearchResult(itemNumber);
        await searchResult.waitFor();
        return searchResult.innerText(); 
    }

    async getSubMenuLink(LINK_NAME) {
        return this.page.locator(`//*[@class="globalnav-submenu-link"][contains(text(), '${LINK_NAME}')]`);
    }

    async goToSubMenuItem(LINK_NAME) {
        await (await this.getSubMenuLink(LINK_NAME)).click();
    }
}

module.exports = GlobalNavSubMenu;