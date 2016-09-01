
# BROser

  Launch any browser, on any OS!

## Example

```js
const launch = require('broser')

launch('osx', 'chrome', {
  uri: 'https://github.com'
}, (err, browser) => {
  if (err) throw err
  browser.on('error', console.error)
})
```

## API

### launch(os, browser, opts, cb)

## CLI

TODO

## License

  MIT
