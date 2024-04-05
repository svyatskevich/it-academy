const mainPage = require('../pageobjects/mainPage');
const navBarItems = require('../pageobjects/components/navBarItems');
const navBarItemsRight = require('../pageobjects/components/navBarItemsRight');

const wdioURL = 'https://webdriver.io/';
const blogLink = 'blog';
const sponsorLink = 'docs/sponsor';
const communityLink = 'community/support';
const githubButton = 'github';
const darkTheme = 'dark';

describe('WebdriverIO e2e tests', () => {
    beforeEach(async () => {
        await mainPage.navigate(wdioURL);
    });

    it('Should contain title "Blog" on Blog page', async () => {
        await mainPage.navigate(wdioURL);
        await navBarItems.navigateToPageNavBar(blogLink);
        await expect(browser).toHaveTitleContaining('Blog');
    });

    it('Should contain text "Need Help?" in header of Community page', async () => {
        await mainPage.navigate(wdioURL);
        await navBarItems.navigateToPageNavBar(communityLink);
        await expect(navBarItems.mainHeader).toHaveText('Need Help?');
    });

    it('Should contain "javascript" in URL of 1st search result for "JavaScript"', async () => {
        await mainPage.navigate(wdioURL);
        await navBarItemsRight.search('JavaScript');
        await navBarItemsRight.goToFirstSearchResult(communityLink);
        await expect(browser).toHaveUrlContaining('javascript');
    });

    it('Should switch theme and have "dark" theme on Sponsor page', async () => {
        await mainPage.navigate(wdioURL);
        await navBarItemsRight.switchModeSite();
        await navBarItemsRight.switchModeSite();
        await navBarItems.navigateToPageNavBar(sponsorLink);
        await expect(await navBarItemsRight.getTheme()).toEqual(darkTheme);
    });

    it('Should go to GitHub and contain repository name "webdriverio"', async () => {
        await mainPage.navigate(wdioURL);
        await navBarItemsRight.goToItemNavBarRight(githubButton);
        await expect(navBarItemsRight.nameRepoGithub).toHaveText('webdriverio');
    });
});
