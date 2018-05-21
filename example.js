const launch = require('.')

launch('chrome', {
  uri: 'https://github.com'
}).then(browser => {
  browser.on('error', console.error)
})
