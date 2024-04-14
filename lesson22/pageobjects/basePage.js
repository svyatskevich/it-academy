class BasePage {
    navigate(url) {
        cy.visit(url)
    }
}

module.exports = BasePage;