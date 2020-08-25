const test = require('ava');
const nodeEncode = require('.');

test('Endode/Decode String', t => {
	t.throws(() => {
		nodeEncode._encode(123);
		nodeEncode._decode(123);
	}, {
		instanceOf: TypeError,
		message: 'Expected a string, got number'
	});

	// Base64 to from utf-8
	t.is(nodeEncode._encode('hello wold!'), 'aGVsbG8gd29sZCE=');
	// Base64 to utf-8
	t.is(nodeEncode._decode('aGVsbG8gd29sZCE='), 'hello wold!');
});
