const assert = require('chai').assert;
const { Human, Employee, Manager, Developer } = require('../lesson-1/hierarchy.js');


// TO DO: WRITE MORE TESTS!

describe('Class Human', () => {
  it('class can be created', () => {
    let abama = new Human('Abama', 50, "1 jul 1960");
    assert.equal(abama.name, 'Abama');
    assert.equal(abama.age, 50);
  });
})