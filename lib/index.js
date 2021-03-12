'use strict';

const typeValidation = (input) => {
	if (typeof input !== 'string') {
		throw new TypeError(`Expected a string, got ${typeof input}`);
	}
};

module.exports.encode = (input) => {
	typeValidation(input);
	return Buffer.from(input, 'utf8').toString('base64');
};

module.exports.decode = (input) => {
	typeValidation(input);
	return Buffer.from(input, 'base64').toString('utf8');
};