#!/usr/bin/env node
'use strict'

process.name = 'browser'

const launch = require('.')

const [, , browser, uri] = process.argv

if (!browser || !uri) {
  console.error('Usage: just-launch BROWSER URI')
  process.exit(1)
}

launch(browser, { uri }).catch(err =>
  setImmediate(() => {
    throw err
  })
)
