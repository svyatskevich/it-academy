/** @type {import('jest').Config} */
const config = {
   // Automatically clear mock calls, instances, contexts and results before every test
   clearMocks: true,

   // Indicates which provider should be used to instrument code for coverage
   coverageProvider: "v8",

   // Make calling deprecated APIs throw helpful error messages
   errorOnDeprecated: true,

   // A set of global variables that need to be available in all test environments
   globals: {
      baseUrl: "https://www.apple.com/",
   },

   reporters: [
      "default",
      [
         "jest-html-reporters",
         {
            pageTitle: "Contract Monitoring Test Report",
            publicPath: "./reports",
            filename: "test-report.html",
            enableMergeData: true,
            dataMergeLevel: 3,
         },
      ],
   ],

   runner: "jest-runner",
};

module.exports = config;
