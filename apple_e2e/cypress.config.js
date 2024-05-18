const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1280,
  pageLoadTimeout: 80000,
  chromeWebSecurity: false,
  headless: true,
  defaultCommandTimeout: 20000,
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      reportDir: 'cypress/reports',
      overwrite: true,
      html: true,
      json: false,
    },
    "specPattern": "cypress/**/*.*.js",
    "browsers": [
      {
        "name": "chrome",
        "family": "chromium",
        "channel": "stable",
        "displayName": "Chrome",
        "version": "123.0.0.0",
        "path": "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
        "minSupportedVersion": 64,
        "majorVersion": "123",
        "launchOptions": {
          "args": [
            "--wm-window-animations-disabled",
            "--animation-duration-scale=0"
          ]
        }
      }
    ]
  },
});