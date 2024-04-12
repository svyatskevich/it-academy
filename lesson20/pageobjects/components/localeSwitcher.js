const BasePage = require('../basePage');

class LocaleSwitcher extends BasePage {
    constructor(page) {
        super(page);    
        }
        
        get closeButton() {
         return this.page.locator('//button[@id="ac-ls-close"]');
        }
         
        async closeLocaleSwitcher() {
        await this.closeButton.isVisible();
        await this.closeButton.click();
    }
}

module.exports = LocaleSwitcher;