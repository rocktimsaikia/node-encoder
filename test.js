const test = require('ava');
const {encode, decode} = require('.');

test('Endode/Decode String', t => {
	t.throws(() => {
		encode(123);
		decode(123);
	}, {
		instanceOf: TypeError,
		message: 'Expected a string, got number'
	});

	// Base64 to from utf-8
	t.is(encode('hello wold!'), 'aGVsbG8gd29sZCE=');
	// Base64 to utf-8
	t.is(decode('aGVsbG8gd29sZCE='), 'hello wold!');
});
