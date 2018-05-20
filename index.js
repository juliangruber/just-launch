'use strict'

const os = require('os')

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

module.exports = (browser, opts, cb) => {
  if (browser === 'electron') {
    const e = browsers.electron(opts)
    e.end(`location = '${opts.uri}';`)
    setImmediate(() => cb(null, e))
  } else if (/^phantom/.test(browser)) {
    const p = browsers.phantomjs(opts)
    p.end(`location = '${opts.uri}';`)
    setImmediate(() => cb(null, p))
  } else if (os === 'linux' && browser === 'chrome') {
    setImmediate(() => cb(null, browsers.chrome(opts)))
  } else if (browsers[browser]) {
    browsers[browser](opts, cb)
  } else {
    throw new Error('OS / browser combination not available')
  }
}
