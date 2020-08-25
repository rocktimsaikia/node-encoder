'use strict';

const _typeValidation = input => {
	if (typeof input !== 'string') {
		throw new TypeError(`Expected a string, got ${typeof input}`);
	}
};

const encode = input => {
	_typeValidation(input);

	const buffer = Buffer.from(input, 'utf8');
	const encoded = buffer.toString('base64');
	return encoded;
};

const decode = input => {
	_typeValidation(input);

	const buffer = Buffer.from(input, 'base64');
	const decoded = buffer.toString('utf8');
	return decoded;
};

module.exports = {
	_encode: encode,
	_decode: decode
};
