#!/usr/bin/env node
'use strict'

process.name = 'browser'

const launch = require('.')

const [,, browser, uri] = process.argv

if (!browser || !uri) {
  console.error('Usage: broser BROWSER URI')
  process.exit(1)
}

launch(browser, { uri }, (err, ps) => {
  if (err) throw err
})
