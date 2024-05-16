const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')
const HomePage = require('../pageobjects/homePage');
const GlobalNavMenu = require('../pageobjects/components/globalNavMenu');
const GlobalNavSubMenu = require('../pageobjects/components/globalNavSubMenu');
const LocaleSwitcher = require('../pageobjects/components/localeSwitcher');
const ChooseCountryRegionPage = require('../pageobjects/chooseCountryRegionPage');
const GlobalFooter = require('../pageobjects/components/globalFooter');

const homePage =  new HomePage();
const globalNavMenu = new GlobalNavMenu();
const globalNavSubMenu = new GlobalNavSubMenu();
const localeSwitcher = new LocaleSwitcher();
const chooseCountryRegionPage = new ChooseCountryRegionPage();
const globalFooter = new GlobalFooter();


Given(/^I navigate to "(.*)"$/, async (url) => {
    await homePage.navigate(url);
});

When(/^I close locale switcher$/, async () => {
    await homePage.click(await localeSwitcher.getCloseButton());
});

When(/^I click on Global Nav Menu "(.*)" link$/, async (linkName) => {
    await homePage.click(await globalNavMenu.getNavMenuLinks(linkName));
});

Then(/^The page title should contain "(.*)"$/, async (pageTitle) => {
    await expect(await browser.getTitle()).toContain(pageTitle);
});

When(/^I click on "(.*)" button in Global Nav Menu$/, async (bttnName) => {
    await homePage.click(await globalNavMenu.getNavMenuButton(bttnName));
});

When(/^I search text "(.*)" in search field$/, async (searchText) => {
    await homePage.setValue(await globalNavSubMenu.getSearchInput(), searchText);
});

Then(/^I should see text "(.*)" in search result link (\d+)$/, async (text, linkNumber) => {
    await expect(await globalNavSubMenu.getTextSearchResultLink(linkNumber)).toContain(text);
});

When(/^I click on Locale link in Global Footer$/, async () => {
    await homePage.click(await globalFooter.getLocaleLink());
});

When(/^I select country "(.*)" in country list$/, async (itemName) => {
    await chooseCountryRegionPage.click(await chooseCountryRegionPage.getCountryListItem(itemName));
});

Then(/^The page should contain "(.*)" URL$/, async (pageUrl) => {
    await expect(await browser.getUrl()).toContain(pageUrl);
});

When(/^I click on Global Nav Menu Button "(.*)"$/, async (bttnName) => {
    await homePage.click(await globalNavMenu.getNavMenuButton(bttnName));
}); 

When(/^I go to "(.*)" link in My Profile list$/, async (linkName) => {
    await (await globalNavSubMenu.getMyProfileLinks(linkName)).click();
});

Then(/^I should see Sign In container$/, async () => {
    await expect(await globalNavSubMenu.getSignInContainer()).toBeDisplayed();
});