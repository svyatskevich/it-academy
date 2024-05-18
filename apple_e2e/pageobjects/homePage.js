const BasePage = require("./basePage");

class HomePage extends BasePage {
   getPageHTML() {
      return cy.get("html");
   }
}

module.exports = new HomePage();