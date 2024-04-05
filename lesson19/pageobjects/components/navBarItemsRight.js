const BasePage = require('../basePage');

class NavBarItemRight extends BasePage {
    get versionLink() {
        return $('//div[@class="navbar__items navbar__items--right"]/a[@class="navbar__item navbar__link"]');
    }

    get switchLanguageButton() {
        return $('//div[contains(@class,"navbar__item dropdown")]');
    }

    get githubLink() {
        return $('//a[@class="navbar__item navbar__link header-github-link"]');
    }

    get nameRepoGithub() {
        return $('//strong[contains(@class, "mr-")]');
    }

    get twitterLink() {
        return $('//a[@class="navbar__item navbar__link header-twitter-link"]');
    }

    get youtubeLink() {
        return $('//a[@class="navbar__item navbar__link header-youtube-link"]');
    }

    get discordLink() {
        return $('//a[@class="navbar__item navbar__link header-discord-link"]');
    }

    get switchModeButton() {
        return $('//button[@class="clean-btn toggleButton_gllP"]');
    }

    get currentlyThemeMode() {
        return $('html[data-theme]');
    }

    get searchButton() {
        return $('//button[@class="DocSearch DocSearch-Button"]');
    }

    get searchField() {
        return $('//input[@class="DocSearch-Input"]');
    }

    get firstSearchResult() {
        return $('//div[@class="DocSearch-Dropdown-Container"]/section[1]');
    }

    async search(searchValue) {
        await this.searchButton.click();
        await this.searchField.setValue(searchValue);
    }

    async goToFirstSearchResult() {
        await this.firstSearchResult.waitForClickable();
        await this.firstSearchResult.click();
    }

    async switchModeSite() {
        await this.switchModeButton.click();
    }

    async getTheme() {
        await this.currentlyThemeMode.waitForExist();
        const currentlyTheme = await this.currentlyThemeMode.getAttribute('data-theme');
        return currentlyTheme;
    }

    async goToItemNavBarRight(linkName) {
        const linkSelectors = {
            github: this.githubLink,
            twitter: this.twitterLink,
            youtube: this.youtubeLink,
            discord: this.discordLink,
        };

        const linkElement = linkSelectors[linkName];
        await linkElement.click();
        const clickedUrl = await linkElement.getAttribute('href');
        await browser.switchWindow(clickedUrl);
    }
}

module.exports = new NavBarItemRight();
