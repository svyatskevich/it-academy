const BasePage = require("../../basePage");

class AvailabilityPopup extends BasePage {
   get availabilityProductInfo() {
      return cy.get(".rf-productlocator-productinfo");
   }
   
   clickAvailabilityColorNavItem(itemNumber) {
      return cy.get(`li.colornav-item:nth-child(${itemNumber}) input[type="radio"]`).click({ force: true });
   }
}

module.exports = new AvailabilityPopup();
