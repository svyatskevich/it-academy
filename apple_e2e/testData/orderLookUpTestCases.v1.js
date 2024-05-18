const { INPUT_NAME, ERROR_MESSAGES, CREDENTIALS } = require("../helpers/constants");

const orderLookUpTestCases = [
    {
        testDescription: "Order Number",
        emptyErrorMessage: ERROR_MESSAGES.MISSING_ORDER_NUMBER,
        invalidErrorMessage: ERROR_MESSAGES.INCORRECT_ORDER_NUMBER,
        inputName: INPUT_NAME.ORDER_NUMBER,
        incorrectValue: CREDENTIALS.INCORRECT_ORDER_NUMBER
    },
    {
        testDescription: "Email Address",
        emptyErrorMessage: ERROR_MESSAGES.MISSING_EMAIL_ADDRESS,
        invalidErrorMessage: ERROR_MESSAGES.INCORRECT_EMAIL_ADDRESS,
        inputName: INPUT_NAME.EMAIL_ADDRESS,
        incorrectValue: CREDENTIALS.INCORRECT_EMAIL_ADDRESS
    }
];

 
 module.exports = orderLookUpTestCases;