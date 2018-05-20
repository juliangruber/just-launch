const browsers = {
  electron: require('electron-stream'),
  phantomjs: require('phantomjs-stream'),
  osx: {
    chrome: require('osx-chrome'),
    firefox: require('osx-firefox'),
    safari: require('osx-safari')
  },
  linux: {
    chrome: require('linux-chrome'),
    firefox: require('linux-firefox')
  },
  windows: {
    chrome: require('windows-chrome'),
    edge: require('windows-edge'),
    firefox: require('windows-firefox')
  }
}

module.exports = (os, browser, opts, cb) => {
  if (browser === 'electron') {
    const e = browsers.electron(opts)
    e.end(`location = '${opts.uri}';`)
    setImmediate(() => cb(null, e))
  } else if (/^phantom/.test(browser)) {
    const p = browsers.phantomjs(opts)
    p.end(`location = '${opts.uri}';`)
    setImmediate(() => cb(null, p))
  } else if (os === 'linux' && browser === 'chrome') {
    setImmediate(() => cb(null, browsers.linux.chrome(opts)))
  } else if (browsers[os] && browsers[os][browser]) {
    browsers[os][browser](opts, cb)
  } else {
    throw new Error('OS / browser combination not available')
  }
}
