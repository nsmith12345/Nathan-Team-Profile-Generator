const checkIfEqual = require('../lib/random.js');

TextDecoderStream('checks if 10 is equal to 10', () => {
    expect(checkIfEqual(10, 10)).toBe(true);
});

module.exports = function() {};

