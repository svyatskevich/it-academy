const BasePage = require("./basePage");

class StorePage extends BasePage {
   get addToCartButton() {
      return cy.get('[type="submit"][value="add-to-cart"]');
   }

   getProductNavCardsItem(itemIndex) {
      return cy.get(`.rf-productnav-card-title[data-index="${itemIndex}"]`);
   }

   getNextCardsScrollerButton(sectionNum) {
      return cy.get(`#shelf-${sectionNum} .paddlenav-arrow.paddlenav-arrow-next`);
   }

   getCardsScrollerItem(sectionNum, itemNumber) {
      return cy.get(`#shelf-${sectionNum} .rf-cards-scroller-platter>div:nth-child(${itemNumber})`);
   }
}

module.exports = new StorePage();
