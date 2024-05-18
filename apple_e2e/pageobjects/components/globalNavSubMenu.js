const BasePage = require("../basePage");

class GlobalNavSubMenu extends BasePage {
   get searchInput() {
      return cy.get("input.globalnav-searchfield-input");
   }

   getSubMenuLink(linkName) {
      return cy.get(`.globalnav-submenu-link[data-analytics-title='${linkName}']`);
   }

   getMyProfileLinks(linkName) {
      return cy.get(`a[class*='ac-gn-bagview-nav-link-${linkName}']`);
   }

   getSearchResultLink(itemNumber) {
      return cy.get(`[data-analytics-region="suggested links"] [style*="item-number: ${itemNumber};"]`);
   }

   search(inputValue) {
      return this.searchInput.should("be.visible").click().type(inputValue);
   }

   goToSearchResultPage(inputValue) {
      return this.search(inputValue).type("{enter}");
   }
}

module.exports = new GlobalNavSubMenu();
