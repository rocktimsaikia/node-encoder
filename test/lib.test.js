const { encode, decode } = require('../lib');

describe('Main', () => {
    it('should throw a TypeError', () => {
        expect(() => encode(123)).toThrowError(TypeError);
        expect(() => encode(123)).toThrowError(/expected a string, got number/i);
        expect(() => decode(123)).toThrowError(TypeError);
        expect(() => decode(123)).toThrowError(/expected a string, got number/i);
    })

    it('should return base64 encoded string', () => {
        expect(encode('hello wold!')).toBe('aGVsbG8gd29sZCE=');
    });

    it('should return base64 decoded string', () => {
        expect(decode('aGVsbG8gd29sZCE=')).toBe('hello wold!');
    });
})