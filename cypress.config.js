const { defineConfig } = require("cypress");

module.exports = defineConfig({

  reporter: 'cypress-mochawesome-reporter',//for html reports

  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      // implement node event listeners here
    },
    baseUrl: 'https://www.amazon.com/',
    watchForFileChanges:false,
    retries:2,
    chromeWebSecurity: false,
  },
});
