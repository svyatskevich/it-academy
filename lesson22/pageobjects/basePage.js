const BaseElements = require("../helpers/baseElements");

class BasePage extends BaseElements {
    navigate(url) {
        cy.visit(url)
    }
}

module.exports = BasePage;