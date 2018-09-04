const tenPromises = async function() {
    let promises = [];

    for (let i = 0; i < 10; i++) {
        promises[i] = await fetch(`https://jsonplaceholder.typicode.com/users/${i+1}`);
    };
    
    console.log(promises);
};

tenPromises();
