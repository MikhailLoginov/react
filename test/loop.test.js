describe('Task 1: function loop', () => {
    it('6 loops of adding 3 to -4 equals 14', () => {
        let i = -4;
        loop(6, () => i+=3);
        chai.assert.equal(i, 14);
    });

    it('If function has not beeing passed, nothing happens', () => {
        try {
           loop(432);
        } catch (err) {
            chai.assert.notExists(err);
        }
    });
    
    it('First argument must be a number, second argument must be a function', () => {
        try {
            loop('string', () => 1);
        } catch (err) {
            chai.assert.include(err.message, 'first argument wrong format');
        }
        try {
            loop(-3, () => 1);
        } catch (err) {
            chai.assert.include(err.message, 'first argument wrong format');
        }
        try {
            loop(51, 7);
        } catch (err) {
            chai.assert.include(err.message, 'second argument must be a function');
        }
    });
})