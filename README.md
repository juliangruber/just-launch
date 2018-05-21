
# just-launch

Launch any browser, on any OS, with a fresh session!

```bash
$ just-launch chrome https://github.com/
```

## Browsers

`just-launch` comes with support for those browsers:

- Chrome
- Firefox
- Safari
- Edge
- Electron
- PhantomJS

On those operating systems:

- mac OS
- Windows
- Linux

## Usage

Use its CLI:


```bash
$ just-launch chrome https://github.com
```

Use its API:

```js
const launch = require('just-launch')

launch('chrome', {
  uri: 'https://github.com'
}, (err, browser) => {
  if (err) throw err
  browser.on('error', console.error)
})
```

## Installation

```bash
$ npm install [-g] just-launch
```

## API

### launch(browser, opts, cb)

Options:

- `uri`

Possible `browser` values:

- `chrome`
- `firefox`
- `electron`
- `phantom`
- `safari` (mac OS only)
- `edge` (Windows only)

## CLI

```bash
$ just-launch
Usage: just-launch BROWSER URI
```

## Related projects

- [osx chrome](https://github.com/juliangruber/osx-chrome)
- [osx firefox](https://github.com/juliangruber/osx-firefox)
- [osx electron](https://github.com/juliangruber/electron-stream)
- [osx phantomjs](https://github.com/juliangruber/phantomjs-stream)
- [osx safari](https://github.com/juliangruber/osx-safari)
- [linux chrome](https://github.com/juliangruber/linux-chrome)
- [linux firefox](https://github.com/juliangruber/linux-firefox)
- [linux electron](https://github.com/juliangruber/electron-stream)
- [linux phantomjs](https://github.com/juliangruber/phantomjs-stream)
- [windows chrome](https://github.com/ashnur/windows-chrome)
- [windows firefox](https://github.com/vweevers/windows-firefox)
- [windows electron](https://github.com/juliangruber/electron-stream)
- [windows phantomjs](https://github.com/juliangruber/phantomjs-stream)
- [windows edge](https://github.com/eugeneware/windows-edge)

## License

  MIT
