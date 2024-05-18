const BasePage = require("./basePage");

class SearchPage extends BasePage {
   get searchInput() {
      return cy.get('input[id=":r0:"][name="search"]');
   }

   get resetInputButton() {
      return cy.get('div#root button.form-icons.form-icons-reset');
   }

   getTabNavItem(itemName) {
      return cy.get(`[data-autom="${itemName}"]`);
   }

   getExploreListItem(itemNumber) {
      return cy.get(`.rf-serp-explore-organic-position-${itemNumber}.rf-serp-organic-product`);
   }
}

module.exports = new SearchPage();
