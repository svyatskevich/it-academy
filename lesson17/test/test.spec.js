import { By, until, Key, Builder } from "selenium-webdriver";
import { expect } from "chai";


describe("UI Tests ChromeDriver", function () {
    let driver;

    before(async () => {
        driver = new Builder().forBrowser("chrome").build();
        await driver.manage().window().maximize();
    });

    after(async () => {
        await driver.quit();
    });

    it('1. Should have title text "ChromeDriver - WebDriver for Chrome"', async () => {
        await driver.get("https://chromedriver.chromium.org/home");
        const mainTitle = await driver.getTitle();
        expect(await mainTitle).to.equal("ChromeDriver - WebDriver for Chrome");
    });


    it('2. Should have title text "Chrome Extensions" and highlighting h1', async () => {
        await driver.get("https://chromedriver.chromium.org/home");
        const extensionLink = await driver.findElement(By.css('.jgXgSe[href="/extensions"]'));
        await extensionLink.click();
    
        const h1MainHeader = await driver.findElement(By.css('h1 .Rn3Z1b'));
        await driver.wait(until.elementIsVisible(h1MainHeader), 1000);
        await driver.executeScript("arguments[0].style.backgroundColor = 'yellow'", h1MainHeader);
    
        const mainTitle = await driver.getTitle();
        expect(await mainTitle).to.contain("Chrome Extensions");
    });


    it('3. Should have "driver" in the first link of search', async () => {
        await driver.get("https://chromedriver.chromium.org/home");
        const searchButton = await driver.findElement(By.css(".vu8Pwe.tCHXDc"));
        await searchButton.click();

        const searchField = await driver.findElement(By.css(".whsOnd.zHQkBf"));
        await driver.wait(until.elementIsVisible(searchField), 1000);
        await searchField.sendKeys("driver", Key.ENTER);

        const searchResult = await driver.wait(until.elementLocated(By.css(".gtazFe:nth-child(1)")), 1000);
        const firstLinkText = await searchResult.getText();
        expect(await firstLinkText.toLowerCase()).to.contain("driver");
    });


    it('4. Should have "/mobile-emulation" in the URL', async () => {
        await driver.get("https://chromedriver.chromium.org/home");

        const additionalList = await driver.findElement(By.css(".jgXgSe:not([href])"));
        await additionalList.click();

        const mobileEmulation = await driver.wait(until.elementLocated(By.css('.ijMPi [data-url*="emulation"]')), 1000);
        await mobileEmulation.click();

        const currentUrl = await driver.getCurrentUrl();
        expect(await currentUrl).to.contain("/mobile-emulation");
    });
});
