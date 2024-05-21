const { INPUT_NAME, INPUT_ID, ERROR_MESSAGES } = require("../helpers/constants");

const giftCardTestCases = [
   {
      testDescription: "empty Recipient Name input",
      themeIndex: 4,
      amountIndex: 100,
      inputName: INPUT_NAME.RECIPIENT_NAME,
      errorInputId: INPUT_ID.RECIPIENT_NAME,
      errorMessage: ERROR_MESSAGES.INCORRECT_NAME
   },
   {
      testDescription: "empty Recipient Email input",
      themeIndex: 6,
      amountIndex: 25,
      inputName: INPUT_NAME.RECIPIENT_EMAIL,
      errorInputId: INPUT_ID.RECIPIENT_EMAIL,
      errorMessage: ERROR_MESSAGES.INCORRECT_RECIPIENT_EMAIL
   },
   {
      testDescription: "empty Sender Email input",
      themeIndex: 8,
      amountIndex: 50,
      inputName: INPUT_NAME.SENDER_EMAIL,
      errorInputId: INPUT_ID.SENDER_EMAIL,
      errorMessage: ERROR_MESSAGES.INCORRECT_SENDER_EMAIL
   }
];

module.exports = giftCardTestCases;