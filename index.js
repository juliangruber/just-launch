'use strict'

const os = require('os')
const { promisify } = require('util')

const browsers = {
  electron: require('electron-stream'),
  phantomjs: require('phantomjs-stream'),
  ...{
    darwin: {
      chrome: require('osx-chrome'),
      firefox: require('osx-firefox'),
      safari: require('osx-safari')
    },
    linux: {
      chrome: require('linux-chrome'),
      firefox: require('linux-firefox')
    },
    win32: {
      chrome: require('windows-chrome'),
      edge: require('windows-edge'),
      firefox: require('windows-firefox')
    }
  }[os.platform()]
}

module.exports = async (browser, opts) => {
  if (browser === 'electron') {
    const e = browsers.electron(opts)
    e.end(`location = '${opts.uri}';`)
    return e
  } else if (/^phantom/.test(browser)) {
    const p = browsers.phantomjs(opts)
    p.end(`location = '${opts.uri}';`)
    return p
  } else if (os === 'linux' && browser === 'chrome') {
    return browsers.chrome(opts)
  } else if (browsers[browser]) {
    return promisify(browsers[browser])(opts)
  } else {
    throw new Error('OS / browser combination not available')
  }
}
