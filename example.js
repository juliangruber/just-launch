const launch = require('.')

launch('osx', 'chrome', {
  uri: 'https://github.com'
}, (err, browser) => {
  if (err) throw err
  browser.on('error', console.error)
})
