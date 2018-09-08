const loop = function(times = 0, callback = null) {
  if (times < 0 || typeof times != 'number' || times != Math.floor(times)) {
    throw Error('first argument wrong format')
  }
  if (callback) {
    if (typeof callback != 'function') {
      throw Error('second argument must be a function')
    }
    for (let i = 0; i<times; i++) {
      callback();
    }
  }
}


/*
// Example
let i = 0;
loop(5, () => i++);
console.log(i); // 5

loop(5); // nothing happens
*/