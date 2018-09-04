/*

// Change this Array as you wish
let infoNames = ['name', 'age', 'email', 'feedback'];

let generator = questionnaire(infoNames),
    state = {};

console.log(state);

    while (!(state.done)) {  
        state = generator.next();
    }

console.log(state);

function* questionnaire(infoNames) {
    
    if (!Array.isArray(infoNames)) {
        throw Error('First argument must be an Array');
    };
    if (infoNames.length == 0) {
        throw Error('Passed Array is empty');
    }

    console.log('Welcome to Questionnaire v1.005.00! Press ENTER to continue!');  
    let i = 0,
        started = false,
        result = {};
    process.stdin.resume();
    process.stdin.setEncoding('utf8');
    process.stdin.on('data', function (chunk) {
        // First loop only
        if (!started) {
            started = true;
            console.log(`write your ${infoNames[0]}: `);
        } else {
            // Gathering info if there are more infoNames still left
            if (infoNames[i+1]) {
                result[infoNames[i++]] = chunk;
                console.log(`write your ${infoNames[i]}: `);
            } else {
                result[infoNames[i]] = chunk;
                process.stdin.pause();
                console.log(result);
                return result;
            }
        }
    })
}

*/

(function questionnaire() {
    
    // Change this Array as you wish
    let infoNames = ['name', 'age', 'email', 'feedback'];

    console.log('Welcome to Questionnaire v1.005.00! Press ENTER to continue!');  
    
    process.stdin.resume();
    process.stdin.setEncoding('utf8');

    let generator = questionGen(infoNames),
        chunkString = "",
        i = 0,
        result = {},
        state = {},
        firstIteration = true;

    function* questionGen(infoNames) {
        // First iteration only; there is no info to gather yet
        while (firstIteration) {
            firstIteration = false;
            console.log(`write your ${infoNames[i]}: `);
            yield i;
        }
        // Continuing if there are more fields exists
        while (infoNames[i+1]) {
            result[infoNames[i++]] = chunkString;
            console.log(`write your ${infoNames[i]}: `);
            yield i;
        }
        result[infoNames[i]] = chunkString;
        return i;
    }

    // Main part - iterating whenever new data is passed
    process.stdin.on('data', function (chunk) {
        chunkString = chunk.replace(/\r\n/g,"");
        state = generator.next();
        if (state.done) {
            process.stdin.pause();
            console.log(result);
        }
    })
})();
