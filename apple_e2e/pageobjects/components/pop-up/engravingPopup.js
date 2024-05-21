const BasePage = require("../../basePage");

class EngravingPopup extends BasePage {
   get engravingInput() {
      return cy.get(".rf-engraving-selecteditem>div:nth-child(2) .form-textbox input");
   }

   get resetEngravingInputButton() {
      return cy.get(".rf-engraving-selecteditem>div:nth-child(2) .form-icons-reset");
   }

   get yourEngravingMessage() {
      return cy.get("#engraving-message-line1 span:nth-child(2)");
   }

   get engravingInputError() {
      return cy.get('[data-autom="engraveValidationMsg"]');
   }

   getEngravingEmojiListItem(itemNumber) {
      return cy.get(`.form-selector-group-withgutters [data-option-index="app_0_0_0_${itemNumber}"]`);
   }
}

module.exports = new EngravingPopup();
