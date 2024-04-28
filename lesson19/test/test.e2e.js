const mainPage = require('../pageobjects/mainPage');
const navBarItems = require('../pageobjects/components/navBarItems');
const navBarItemsRight = require('../pageobjects/components/navBarItemsRight');
const { LINK_NAME, PAGE_LINK } = require('../helpers/constants');

describe('WebdriverIO e2e tests', () => {
    beforeEach(async () => {
        await mainPage.navigate('https://webdriver.io/');
    });

    it('Should contain title "Blog" on Blog page', async () => {
        await navBarItems.navigateToNavBarPage(PAGE_LINK.BLOG);
        await expect(browser).toHaveTitleContaining('Blog');
    });

    it('Should contain text "Need Help?" in header of Community page', async () => {
        await navBarItems.navigateToNavBarPage(PAGE_LINK.COMMUNITY);
        await expect(navBarItems.mainHeader).toHaveText('Need Help?');
    });

    it('Should contain "javascript" in URL of 1st search result for "JavaScript"', async () => {
        await navBarItemsRight.search('JavaScript');
        await navBarItemsRight.goToFirstSearchResult();
        await expect(browser).toHaveUrlContaining('javascript');
    });

    it('Should switch theme and have "dark" theme on Sponsor page', async () => {
        await navBarItemsRight.switchModeSite();
        await navBarItemsRight.switchModeSite();
        await navBarItems.navigateToNavBarPage(PAGE_LINK.SPONSOR);
        await expect(await navBarItemsRight.getTheme()).toEqual('dark');
    });

    it('Should go to GitHub and contain repository name "webdriverio"', async () => {
        await navBarItemsRight.goToItemNavBarRight(LINK_NAME.GITHUB);
        await expect(navBarItemsRight.nameRepoGithub).toHaveText('webdriverio');
    });
});
