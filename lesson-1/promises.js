let promises = [];

(async function getPromises() {
    for(let i = 1; i <= 10; i++) {
        promises[i] = await fetch(`https://jsonplaceholder.typicode.com/users/${i}`);
    };
})()

console.log(promises)
