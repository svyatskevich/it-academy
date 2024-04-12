const mainPage = require('../pageobjects/mainPage');
const navBarItems = require('../pageobjects/components/navBarItems');
const navBarItemsRight = require('../pageobjects/components/navBarItemsRight');
const { BTTN_NAME, LINK_NAME } = require('../helpers/constants');

describe('WebdriverIO e2e tests', () => {
    beforeEach(async () => {
        await mainPage.navigate('https://webdriver.io/');
    });

    it('Should contain title "Blog" on Blog page', async () => {
        await mainPage.navigate('https://webdriver.io/');
        await navBarItems.navigateToPageNavBar(LINK_NAME.BLOG);
        await expect(browser).toHaveTitleContaining('Blog');
    });

    it('Should contain text "Need Help?" in header of Community page', async () => {
        await mainPage.navigate('https://webdriver.io/');
        await navBarItems.navigateToPageNavBar(LINK_NAME.COMMUNITY);
        await expect(navBarItems.mainHeader).toHaveText('Need Help?');
    });

    it('Should contain "javascript" in URL of 1st search result for "JavaScript"', async () => {
        await mainPage.navigate('https://webdriver.io/');
        await navBarItemsRight.search('JavaScript');
        await navBarItemsRight.goToFirstSearchResult();
        await expect(browser).toHaveUrlContaining('javascript');
    });

    it('Should switch theme and have "dark" theme on Sponsor page', async () => {
        await mainPage.navigate('https://webdriver.io/');
        await navBarItemsRight.switchModeSite();
        await navBarItemsRight.switchModeSite();
        await navBarItems.navigateToPageNavBar(LINK_NAME.SPONSOR);
        await expect(await navBarItemsRight.getTheme()).toEqual('dark');
    });

    it('Should go to GitHub and contain repository name "webdriverio"', async () => {
        await mainPage.navigate('https://webdriver.io/');
        await navBarItemsRight.goToItemNavBarRight(BTTN_NAME.GITHUB);
        await expect(navBarItemsRight.nameRepoGithub).toHaveText('webdriverio');
    });
});
