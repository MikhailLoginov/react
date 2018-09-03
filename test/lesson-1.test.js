const assert = require('chai').assert;
const calculateArea = require('../lesson-1/calculateArea.js');
const loop = require('../lesson-1/loop.js');

describe('Function loop', () => {
    it('6 loops of adding 3 to -4 equals 14', () => {
        let i = -4;
        loop(6, () => i+=3)
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
            loop('string', () => 1)
        } catch (err) {
            assert.include(err.message, 'first argument wrong format');
        }
        try {
            loop(-3, () => 1)
        } catch (err) {
            assert.include(err.message, 'first argument wrong format');
        }
        try {
            loop(51, 7)
        } catch (err) {
            assert.include(err.message, 'second argument must be a function');
        }
    })
})

describe('Function calculateArea', () => {
    it('Returns an object with specified fields', () => {
        let result = calculateArea('square', 2);
        assert.typeOf(result, "object");
        assert.exists(result.area);
        assert.exists(result.figure);
        assert.exists(result.input);
    })
    it('Square area calculation', () => {
        assert.equal(calculateArea('square', 7).area, 49);
    });
    it('Rectangle area calculation', () => {
        assert.equal(calculateArea('rectangle', 4, 8).area, 32);
    });
    it('Circle area calculation', () => {
        assert.equal(Math.round(calculateArea('circle', 10).area), 314);
    });
    it('Triangle area calculation', () => {
        assert.equal(Math.round(calculateArea('triangle', 7, 5.5, 3.2).area), 9)
    });
    it('Incorrect values are handling', () => {
        try {
            calculateArea('triangle', -7)
        } catch (err) {
            assert.include(err.message, "input value can't be less than 0")
        }
        try {
            calculateArea(3, 2)
        } catch (err) {
            assert.include(err.message, "must be a string")
        }
        try {
            calculateArea('unknown-figure', 5, 5, 5)
        } catch (err) {
            assert.include(err.message, "unknown")
        }
    })
})