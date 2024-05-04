const BasePage = require('../basePage');

class GlobalNavSubMenu extends BasePage {
    async getSignInContainer() {
        return $("[id='signin-container'][class='rs-page-content']");
    }

    async getSearchInput() {
        return $('//*[@class="globalnav-searchfield-input"]');
    }
    
    async getSearchResultLink(linkNumber) {
        return $(`//*[@data-analytics-region="suggested links"]//li[@style="--r-globalnav-flyout-item-number: ${linkNumber};"]`);
    }

    async getTextSearchResultLink(linkNumber) {
        return (await this.getSearchResultLink(linkNumber)).getText();
    }

    async getMyProfileLinks(linkName) {
        return $(`//*[@class="ac-gn-bagview-nav-link ac-gn-bagview-nav-link-${linkName}"]`);
    }
}

module.exports = GlobalNavSubMenu;