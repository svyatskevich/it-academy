const BasePage = require("../../basePage");

class AvailabilityPopup extends BasePage {
   get availabilityProductInfo() {
      return cy.get(".rf-productlocator-productinfo");
   }
   
   getAvailabilityColorNavItem(itemNumber) {
      return cy.get(`li.colornav-item:nth-child(${itemNumber}) input[type="radio"]`);
   }
}

module.exports = new AvailabilityPopup();
