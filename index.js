'use strict';

/**
 * Checks if the input is valid string
 * @param {String} input | utf-8 or base64 string
 */
const _typeValidation = input => {
	if (typeof input !== 'string') {
		throw new TypeError(`Expected a string, got ${typeof input}`);
	}
};

/**
 * Returns base64 string
 * @param {string} input | utf-8 string
 */
module.exports.encode = input => {
	_typeValidation(input);

	const buffer = Buffer.from(input, 'utf8');
	const encoded = buffer.toString('base64');
	return encoded;
};

/**
 * Returns utf-8 string
 * @param {string} input | base64 string
 */
module.exports.decode = input => {
	_typeValidation(input);

	const buffer = Buffer.from(input, 'base64');
	const decoded = buffer.toString('utf8');
	return decoded;
};
