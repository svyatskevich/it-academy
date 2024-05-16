const BasePage = require('../basePage');

class GlobalNavMenu extends BasePage {
    async getNavMenuButton(bttnName) {
        return $(`//a[@id="globalnav-menubutton-link-${bttnName}"]`);
    }

    async getNavMenuLinks(linkName) {
        return $(`//*[@data-globalnav-item-name="${linkName}"]`);
    }
}

module.exports = GlobalNavMenu;