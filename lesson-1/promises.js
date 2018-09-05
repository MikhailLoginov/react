const tenPromises = function() {
    let promises = [];

    for (let i = 0; i < 10; i++) {
        promises[i] = fetch(`https://jsonplaceholder.typicode.com/users/${i+1}`);
    };
    Promise.all(promises).then( res => {
        console.log(res);
    });
};

tenPromises();