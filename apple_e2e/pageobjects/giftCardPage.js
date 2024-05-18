const BasePage = require('./basePage')

class GiftCardPage extends BasePage {
    get buyButton() {
        return cy.get('.button.button-super');
    }

    get giftCardPreviewMessage() {
        return cy.get('.rs-giftcard-preview-withmessage>.rf-giftcard-message-preview');
    }

    getErrorInputMessage(inputID) {
        return cy.get(`[id="${inputID}_error"]`);
    }

    getDeliveryDetailsInput(inputName) {
        return cy.get(`input[name="${inputName}"]`);
    }

    getGiftCardTypeSelector(selectorNum) {
        return cy.get(`[name="dimensionGiftCardType"][id=":r${selectorNum}:"]`);
    }

    getGiftCardThemeSelector(selectorNum) {
        return cy.get(`[name="dimensionGiftCardTheme"][id=":r${selectorNum}:"]`);
    }

    getChooseAmountButton(amountNum) {
        return cy.get(`.form-selector-label[data-autom="choose-amount-${amountNum}"]`)
    }

}

module.exports = new GiftCardPage();