const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1440,
  viewportHeight: 900,
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/report/mochawesome-report",
    embeddedScreenshots: true,
    inlineAssets: true,
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://demo.nopcommerce.com/",
    specPattern: [
      "cypress/e2e/register.cy.js",
      "cypress/e2e/login.cy.js",
      "cypress/e2e/dashboard.cy.js",
    ],
  },
});
