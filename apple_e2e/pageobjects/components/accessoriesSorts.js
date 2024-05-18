const BasePage = require("../basePage");

class AccessoriesSorts extends BasePage {
   get selectedSortItem() {
      return cy.get('.rf-accessories-sort-selected');
   }
   
   getAccessoriesSortListItem(itemName) {
      return cy.get(`.rf-accessories-sort-listitem .rf-sort-links-${itemName}`);
   }
}

module.exports = new AccessoriesSorts();
