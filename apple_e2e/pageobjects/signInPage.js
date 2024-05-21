const BasePage = require("./basePage");
const he = require("he");

class SignInPage extends BasePage {
   getOrderLookUpInput(inputName) {
      return cy.get(`[id="signIn.orderLookUp.${inputName}"]`);
   }

   getOrderLookUpInputError(inputName) {
      return cy.get(`[id="signIn.orderLookUp.${inputName}_error"]`);
   }

   getIframeBody() {
      return cy
         .get("#aid-auth-widget-iFrame")
         .its("0.contentDocument.body")
         .should("not.be.empty")
         .then(cy.wrap);
   }

   findElementInIframe(attribute, value) {
      return this.getIframeBody().find(`[${attribute}="${value}"]`);
   }

   enterAccountNameField(accountName) {
      this.findElementInIframe("id", "account_name_text_field").type(accountName);
   }

   enterPasswordField(password) {
      this.findElementInIframe("id", "password_text_field").type(password);
   }

   clickContinueWithPassword() {
      this.findElementInIframe("id", "sign-in").first().click();
   }

   getCheckboxInput() {
      return this.findElementInIframe("type", "checkbox").should("exist");
   }

   uncheckRememberMeCheckbox() {
      this.findElementInIframe("type", "checkbox").uncheck({ force: true });
   }

   signInToAccount(accountName, password) {
      this.enterAccountNameField(accountName);
      this.clickContinueWithPassword();
      this.enterPasswordField(password);
      this.clickContinueWithPassword();
   }

   decodeSignInErrorText($errMsg) {
      return he.decode($errMsg.text().trim());
   }

   getErrorTextForInvalidPassword() {
      return this.findElementInIframe("id", "errMsg").should("be.visible").then(($errMsg) => {
         return this.decodeSignInErrorText($errMsg);
      });
   }
}

module.exports = new SignInPage();