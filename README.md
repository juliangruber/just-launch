
# just-launch

  Launch any browser, on any OS!

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

## Available browsers

- [x] [osx chrome](https://github.com/juliangruber/osx-chrome)
- [x] [osx firefox](https://github.com/juliangruber/osx-firefox)
- [X] [osx electron](https://github.com/juliangruber/electron-stream)
- [X] [osx phantomjs](https://github.com/juliangruber/phantomjs-stream)
- [x] [osx safari](https://github.com/juliangruber/osx-safari)
- [x] [linux chrome](https://github.com/juliangruber/linux-chrome)
- [x] [linux firefox](https://github.com/juliangruber/linux-firefox)
- [X] [linux electron](https://github.com/juliangruber/electron-stream)
- [X] [linux phantomjs](https://github.com/juliangruber/phantomjs-stream)
- [X] [windows chrome](https://github.com/ashnur/windows-chrome)
- [X] [windows firefox](https://github.com/vweevers/windows-firefox)
- [X] [windows electron](https://github.com/juliangruber/electron-stream)
- [X] [windows phantomjs](https://github.com/juliangruber/phantomjs-stream)
- [X] [windows edge](https://github.com/eugeneware/windows-edge)

## API

### launch(browser, opts, cb)

Options:

- `uri`

## CLI

```bash
$ just-launch
Usage: just-launch BROWSER URI
```

## License

  MIT
