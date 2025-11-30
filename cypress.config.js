const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:8889",
    supportFile: false,  // disables support file
    specPattern: 'cypress/integration/**/*.js',
  }
})
