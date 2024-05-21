class BaseElements {
   click(selector, option) {
      selector.click(option);
   }

   clickEmpty() {
      cy.get("body").click(0, 0);
   }

   invokeText(selector) {
      return selector.invoke("text");
   }

   invokeVal(selector) {
      return selector.should("be.visible").invoke("val");
   }

   invokeAttr(selector, attr) {
      return selector.should("be.visible").invoke("attr", attr);
   }

   type(selector, inputValue) {
      return selector.should("exist").click().type(inputValue);
   }

   normalizeSpaces(text) {
      return text.replace(/\s+/g, " ").trim();
   }
}

module.exports = BaseElements;
