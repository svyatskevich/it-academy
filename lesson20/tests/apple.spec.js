// @ts-check
const { test, expect } = require('@playwright/test');

const HomePage = require('../pageobjects/homePage');
const GlobalNavMenu = require('../pageobjects/components/globalNavMenu');
const GlobalNavSubMenu = require('../pageobjects/components/globalNavSubMenu');
const LocaleSwitcher = require('../pageobjects/components/localeSwitcher');
const { BTTN_NAME, LINK_NAME } = require('../helpers/constants');

test.describe('Apple test', async function () {
  let homePage;
  let globalNavMenu;
  let globalNavSubMenu;
  let localeSwitcher;

  test.beforeEach(async ({ page, context }) => {
    homePage = new HomePage(page);
    globalNavMenu = new GlobalNavMenu(page);
    globalNavSubMenu = new GlobalNavSubMenu(page);
    localeSwitcher = new LocaleSwitcher(page);

  });

  test('Should contain url "/ipad" on the "iPad" page', async ({ page }) => {
    await homePage.navigate('https://www.apple.com/');
    await localeSwitcher.closeLocaleSwitcher();
    await globalNavMenu.goToNavMenuItem(LINK_NAME.IPAD);
    await expect(await page.url()).toContain('/ipad');
  });

  test('Should go to "Apple Watch Store" subpage and contain title "Buy Apple Watch"', async ({ page }) => {
    await homePage.navigate('https://www.apple.com/');
    await localeSwitcher.closeLocaleSwitcher();
    await globalNavMenu.openSubMenu(LINK_NAME.WATCH);
    await globalNavSubMenu.goToSubMenuItem('Shop Apple Watch');
    await expect(await page.title()).toContain('Buy Apple Watch');
  });

  test('Should contain "Find" in 1st search result for "Find" search query', async () => {
    await homePage.navigate('https://www.apple.com/');
    await localeSwitcher.closeLocaleSwitcher();
    await globalNavMenu.clickButton(BTTN_NAME.SEARCH);
    await globalNavSubMenu.search('Find');
    await expect(await globalNavSubMenu.getTextSearchResult(1)).toContain('Find');
  });

  test('Should go to "Orders" without authorization and have visible SignIn container', async () => {
    await homePage.navigate('https://www.apple.com/');
    await localeSwitcher.closeLocaleSwitcher();
    await globalNavMenu.clickButton(BTTN_NAME.BAG);
    await globalNavSubMenu.goToMyProfileLinks(LINK_NAME.ORDERS);
    await expect(await globalNavSubMenu.signInContainer).toBeVisible();
  });
});