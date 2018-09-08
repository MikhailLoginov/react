describe('Task 3: classes hierarchy', () => {

  let petya,
      vasya,
      misha;

  it('Manager can be created', () => {
    petya = new Manager('Petya', 35, 2071983, 100000, 'personal lines');
    chai.assert.equal(petya.name, 'Petya');
    chai.assert.equal(petya.age, 35);
    chai.assert.equal(petya.salary, 100000);
  });

  it('Developer can be created', () => {
    vasya = new Developer('Vasiliy', 25, '20-10-1994', 50000, 'frontend', petya);
    misha = new Developer('Mikhail', 25, '20-10-1994', 50000, 'frontend', petya);
    chai.assert.equal(vasya.name, 'Vasiliy');
    chai.assert.equal(vasya.department, 'frontend');
    chai.assert.equal(misha.salary, 50000);
  });

  it('Developer can be assigned to a manager', () => {
    vasya.setManager(petya);
    chai.assert.equal(vasya.manager, petya);
  });

  it('Manager can have an array of assigned developers', () => {
    petya.addDeveloper(vasya);
    petya.addDeveloper(misha);
    chai.assert.isArray(petya.developers);
    chai.assert.include(petya.developers[1].name, 'Mikhail');
  });

  it('Manager can remove developer from his list', () => {
    petya.removeDeveloper(vasya);
    chai.assert.notInclude(petya.developers[0].name, 'V');
    chai.assert.include(petya.developers[0].name, 'Mikhail');
  });
})