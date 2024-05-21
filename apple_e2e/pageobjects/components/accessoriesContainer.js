const BasePage = require('../basePage')

class AccessoriesContainer extends BasePage {
    get accessoriesSortButton() {
        return cy.get("button.rf-accessories-sort");
     }
  
    getAccessoriesListItem(itemNumber) {
        return cy.get(`.rf-accessoriesgrid.column>div:nth-child(${itemNumber})`);
    }

    getPriceOfAccessoriesItem(itemNumber) {
        return this.getAccessoriesListItem(itemNumber)
           .find(".rf-producttile-pricecurrent")
           .invoke("text")
           .then((price) => {
              return parseFloat(price.replace("$", ""));
           });
     }
}

module.exports = new AccessoriesContainer();