class BaseElements {
   click(selector, selectorPosition) {
      if (selectorPosition) {
         selector[selectorPosition].should("be.visible").click();
      }
      selector.should("be.visible").click();
   }

   clickExist(selector) {
      selector.should("exist").click();
   }

   clickEmpty() {
      cy.get("body").click(0, 0);
   }

   invokeTextVisible(selector) {
      return selector.should("be.visible").invoke("text");
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
}

module.exports = BaseElements;
