const { defineConfig } = require("cypress");

module.exports = defineConfig({
  fixturesFolder: false,
  e2e: {
    supportFile: false,
    baseUrl: "https://www.google.com/",
  },
});
