const BasePage = require("./basePage");

class ProductPage extends BasePage {
   get selectedColor() {
      return cy.get(".rf-flagship-collapsable-header-button span");
   }

   get addEngravingButton() {
      return cy.get('.form-selector-input[data-trigger-id="engraving-add"]');
   }

   get checkAvailabilityButton() {
      return cy.get(".rf-pickup-quote-info .as-buttonlink");
   }

   getSelectionFormColorItem(itemNumber) {
      return cy.get(`.form-selector-group-withgutters div:nth-child(${itemNumber}) .form-selector-label`);
   }
}

module.exports = new ProductPage();
