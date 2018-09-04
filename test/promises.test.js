describe('Task 5: function promises', () => {

  let resp = "";

  it('Function prints an array of 10 items', async () => {
    console.log = function(res) {
      resp = res;
      chai.assert.isArray(res);
      chai.assert.equal(res.length, 10);
    }
    await tenPromises();
  });
  it('Responses are from URL "https://jsonplaceholder.typicode.com/users/"', () => {
    chai.assert.include(resp[2].url, "jsonplaceholder.typicode");
    chai.assert.exists(resp[8].type);
  });
  it('Users numbers are from 1 to 10', () => {
    chai.assert.include(resp[0].url, "users/1");
    chai.assert.include(resp[3].url, "users/4");
    chai.assert.include(resp[9].url, "users/10");
  })
})