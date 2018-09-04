describe('Task 2: function calculateArea', () => {
    it('Returns an object with specified fields', () => {
        let result = calculateArea('square', 2);
        chai.assert.typeOf(result, "object");
        chai.assert.exists(result.area);
        chai.assert.exists(result.figure);
        chai.assert.exists(result.input);
    });
    it('Square area calculation', () => {
        chai.assert.equal(calculateArea('square', 7).area, 49);
    });
    it('Rectangle area calculation', () => {
        chai.assert.equal(calculateArea('rectangle', 4, 8).area, 32);
    });
    it('Circle area calculation', () => {
        chai.assert.equal(Math.round(calculateArea('circle', 10).area), 314);
    });
    it('Triangle area calculation', () => {
        chai.assert.equal(Math.round(calculateArea('triangle', 7, 5.5, 3.2).area), 9)
    });
    it('Incorrect values are handling', () => {
        try {
            calculateArea('triangle', -7);
        } catch (err) {
            chai.assert.include(err.message, "input value can't be less than 0");
        }
        try {
            calculateArea(3, 2);
        } catch (err) {
            chai.assert.include(err.message, "must be a string");
        }
        try {
            calculateArea('unknown-figure', 5, 5, 5);
        } catch (err) {
            chai.assert.include(err.message, "unknown");
        }
    });
})