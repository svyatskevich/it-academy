const BasePage = require('../basePage');

class GlobalNavMenu extends BasePage {
    constructor(page) {
        super(page); 
    }

    async getNavMenuButton(bttnName) {
        return this.page.locator(`//*[@id="globalnav-menubutton-link-${bttnName}"]`);
    }

    async clickButton(bttnName) {
        await (await this.getNavMenuButton(bttnName)).isVisible();
        await (await this.getNavMenuButton(bttnName)).click();
    }

    async getNavMenuLink(linkName) {
        return this.page.locator(`//*[@data-globalnav-item-name="${linkName}"]`);
    }

    async goToNavMenuItem(linkName) {
        await (await this.getNavMenuLink(linkName)).isVisible();
        await (await this.getNavMenuLink(linkName)).click();
    }

    async openSubMenu(linkName) {
        const navMenuLinks = await this.getNavMenuLinks(linkName);
        await navMenuLinks.hover();
    }
}

module.exports = GlobalNavMenu;