
# just-launch [![Build Status](https://travis-ci.com/juliangruber/just-launch.svg?branch=master)](https://travis-ci.com/juliangruber/just-launch)

Launch any browser, on any OS, with a fresh session!

```bash
$ just-launch chrome https://github.com/
```

```js
const browser = await launch('chrome', { uri: 'https://github.com/' })
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

// using async/await
const browser = await launch('chrome', { uri: 'https://github.com' })
browser.on('error', console.error)

// using promises
launch('chrome', { uri: 'https://github.com' })
.then(browser => {
  browser.on('error', console.error)
})
```

## Installation

```bash
$ npm install [-g] just-launch
```

## API

### launch(browser, opts)

Possible `browser` values:

- `chrome`
- `firefox`
- `electron`
- `phantom`
- `safari` (mac OS only)
- `edge` (Windows only)

Options:

- `uri`

Returns a `Browser` object:

### Browser#on('error', cb)

An error occurred.

### Browser#on('exit', cb)

The process exited.

### Browser#kill()

Kill the browser process.

## CLI

```bash
$ just-launch
Usage: just-launch BROWSER URI
```

## Related projects

- [osx chrome](https://github.com/juliangruber/osx-chrome)
- [osx firefox](https://github.com/juliangruber/osx-firefox)
- [osx safari](https://github.com/juliangruber/osx-safari)
- [linux chrome](https://github.com/juliangruber/linux-chrome)
- [linux firefox](https://github.com/juliangruber/linux-firefox)
- [windows chrome](https://github.com/ashnur/windows-chrome)
- [windows firefox](https://github.com/vweevers/windows-firefox)
- [windows edge](https://github.com/eugeneware/windows-edge)
- [electron-stream](https://github.com/juliangruber/electron-stream)
- [phantomjs-stream](https://github.com/juliangruber/phantomjs-stream)

## License

  MIT
