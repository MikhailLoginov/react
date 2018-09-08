describe('Task 5: function promises', () => {
  let defaultLog;

  it('Function prints an array of 10 items', () => {
    defaultLog = console.log;
    console.log = function(res) {
      chai.assert.isArray(res);
      chai.assert.equal(res.length, 10);
    }
    tenPromises();
  });

  it('Responses are from URL "https://jsonplaceholder.typicode.com/users/"', () => {
    console.log = function(res) {
      chai.assert.include(res[2].url, 'jsonplaceholder.typicode');
      chai.assert.exists(res[8].type);
    }
    tenPromises();
  });
  
  it('Users numbers are from 1 to 10', () => {
    console.log = function(res) {
      chai.assert.include(res[0].url, 'users/1');
      chai.assert.include(res[3].url, 'users/4');
      chai.assert.include(res[9].url, 'users/10');
    }
    tenPromises();
    console.log = defaultLog;
  })
})