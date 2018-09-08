const questionnaire = function() {
    
    // Change this Array as you wish
    const questionFields = ['name', 'age', 'email', 'feedback'];

    alert('Welcome to Questionnaire v1.005.00! Press OK to continue!');  

    let generator = questionAsker(),
        state = {},
        result = {};

    function* questionAsker() {
        let i = 0;
        while (questionFields[i]) {
            let answer = prompt(`Enter your ${questionFields[i]}`);
            if (answer != '' && answer != null) {
                result[questionFields[i]] = answer;
                yield i++;
            }
        }
        return i;
    }

    do {
        state = generator.next();
    } while (!(state.done))

    console.log(result);
}
