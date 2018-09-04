const assert = require('chai').assert;
const loop = require('../lesson-1/loop.js');

describe('Function loop', () => {
    it('6 loops of adding 3 to -4 equals 14', () => {
        let i = -4;
        loop(6, () => i+=3);
        assert.equal(i, 14);
    });
    it('if function doesn\'t pass, nothing happens', () => {
        try {
           loop(432);
        } catch (err) {
            assert.notExists(err);
        }
    });
    it('first argument must be a number, second argument must be a function', () => {
        try {
            loop('string', () => 1);
        } catch (err) {
            assert.include(err.message, 'first argument wrong format');
        }
        try {
            loop(-3, () => 1);
        } catch (err) {
            assert.include(err.message, 'first argument wrong format');
        }
        try {
            loop(51, 7);
        } catch (err) {
            assert.include(err.message, 'second argument must be a function');
        }
    });
})