const BasePage = require('../basePage');

class GlobalNavMenu extends BasePage {
    constructor(page) {
        super(page); 
    }

    async getNavMenuButton(BTTN_NAME) {
        return this.page.locator(`//*[@id="globalnav-menubutton-link-${BTTN_NAME}"]`);
    }

    async clickButton(BTTN_NAME) {
        await (await this.getNavMenuButton(BTTN_NAME)).isVisible();
        await (await this.getNavMenuButton(BTTN_NAME)).click();
    }

    async getNavMenuLinks(LINK_NAME) {
        return this.page.locator(`//*[@data-globalnav-item-name="${LINK_NAME}"]`);
    }

    async goToNavMenuItem(LINK_NAME) {
        await (await this.getNavMenuLinks(LINK_NAME)).isVisible();
        await (await this.getNavMenuLinks(LINK_NAME)).click();
    }

    async openSubMenu(LINK_NAME) {
        const navMenuLinks = await this.getNavMenuLinks(LINK_NAME);
        await navMenuLinks.hover();
    }
}

module.exports = GlobalNavMenu;