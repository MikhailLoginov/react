const calculateArea = require('../lesson-1/calculateArea.js');
const assert = require('chai').assert;

describe('calculateArea', () => {
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