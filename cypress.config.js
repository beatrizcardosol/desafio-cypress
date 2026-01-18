const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    viewportWidth: 1920,
    viewportHeight: 1080,
    baseUrl: "https://coffee-cart.app/",
    specPattern: 'cypress/e2e/**/*.feature',
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    
      const cucumber = require('cypress-cucumber-preprocessor').default;
      on('file:preprocessor', cucumber());

      return config;
    },
  },
});