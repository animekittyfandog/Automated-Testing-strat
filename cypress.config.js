const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost',
    supportFile: false,  // disables support file
    specPattern: 'cypress/integration/**/*.js',
  }
})
