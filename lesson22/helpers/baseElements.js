class BaseElements {
   click(selector, selectorPosition) {
      if (selectorPosition) {
         selector[selectorPosition].should("be.visible").click();
      }
      selector.should("be.visible").click();
   }
}

module.exports = BaseElements;
