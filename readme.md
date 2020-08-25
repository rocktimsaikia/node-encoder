# node-encoder ![build](https://travis-ci.com/RocktimSaikia/node-encoder.svg?branch=master) ![license](https://img.shields.io/github/license/rocktimsaikia/node-encoder)

> A zero dependency base64 based Encoder and Decoder for Node.js. :unicorn:

<br/>

## Install
```bash
npm install node-encoder
```

## Usage

```js
const {_encode, _decode} = require('node-encoder');


_encode('Everything is better with a unicorn 🦄');
//=> RXZlcnl0aGluZyBpcyBiZXR0ZXIgd2l0aCBhIHVuaWNvcm4g8J+mhA==


_decode('QmUgYSBVbmljb3JuIPCfpoQgaW4gYSBGaWVsZCBGdWxsIG9mIEhvcnNlcw==');
//=> Be a Unicorn 🦄 in a Field Full of Horses'
```

## API

### _encode(input)

Takes a single `utf-8/ascii` string input as argument and retuns it's `base64` encoded string version.

### _decode(input)

Takes a single `base64` string input as argument and retuns it's `utf-8` decoded string version.


## Support

<a href="https://www.buymeacoffee.com/7BdaxfI"><img src="https://user-images.githubusercontent.com/33410545/91169112-5c1c7900-e6f4-11ea-9391-904093258dcb.png" height="80px"/></a>
