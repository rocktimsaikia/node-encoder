# node-encoder ![build](https://travis-ci.com/RocktimSaikia/node-encoder.svg?branch=master) ![license](https://img.shields.io/github/license/rocktimsaikia/node-encoder)
[![NPM Badge](https://nodei.co/npm/node-encoder.png)](https://npmjs.com/package/node-encoder)
> A zero dependency `base64` based Encoder and Decoder for Node.js. :unicorn:

## Install
```bash
npm install node-encoder
```

## Usage

```js
const {encode, decode} = require('node-encoder')


encode('Everything is better with a unicorn 🦄')

//=> RXZlcnl0aGluZyBpcyBiZXR0ZXIgd2l0aCBhIHVuaWNvcm4g8J+mhA==


decode('QmUgYSBVbmljb3JuIPCfpoQgaW4gYSBGaWVsZCBGdWxsIG9mIEhvcnNlcw==')

//=> Be a Unicorn 🦄 in a Field Full of Horses'
```

## API

### encode(input)

Takes a single `utf-8/ascii` string input as argument and retuns it's `base64` encoded string version.

### decode(input)

Takes a single `base64` string input as argument and retuns it's `utf-8` decoded string version.


## Support

<a href="https://www.buymeacoffee.com/7BdaxfI"><img src="https://user-images.githubusercontent.com/33410545/91206759-48d5d180-e725-11ea-93b5-754d98c007af.png" height="70px"/></a>
