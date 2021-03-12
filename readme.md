# node-encoder [![Actions Status](https://github.com/rocktimsaikia/node-encoder/workflows/build/badge.svg)](https://github.com/rocktimsaikia/node-encoder/actions)

> A zero dependency :tada: base64 encoder and decoder for Node.js. 


## Installation
```bash
npm install node-encoder
```

## Usage

```js
const {encode, decode} = require('node-encoder')

encode('hello wold!') //=> aGVsbG8gd29sZCE=

decode('aGVsbG8gd29sZCE=') //=> hello wold!
```

## API

### `encode(input)`

Takes a single `utf-8/ascii` string input as argument and retuns it's `base64` encoded string version.

### `decode(input)`

Takes a single `base64` string input as argument and retuns it's `utf-8` decoded string version.

## License
MIT 2021 &copy; [Rocktim Saikia](https://rocktimsaikia.now.sh)