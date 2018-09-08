/**This function calculates an area of given figure
 * You must specify a figure and then all values of this figure
 * @param figure is a string that
 * accept values 'square', 'rectangle', 'circle' and 'triangle'
 * @returns an object 
 * { area: calculated area, figure: specified figure, input: specified values of your figure }
 */
const calculateArea = function(figure, paramA = 0, paramB = 0, paramC = 0) {
    if (typeof figure != 'string') {
        throw Error('first parametr must be a string')
    }
    if (typeof paramA != 'number' || typeof paramB != 'number' || typeof paramC != 'number') {
        throw Error('input values must be numbers');
    }
    if (paramA < 0 || paramB < 0 || paramC < 0) {
        throw Error('input value can\'t be less than 0');
    }
    switch (figure) {
        case 'square':
            return { 
                area: paramA**2,
                figure,
                input : paramA
            };
        case 'rectangle':
            return {
                area: paramA*paramB,
                figure,
                input: [paramA, paramB]
            };
        case 'circle':
            return {
                area: Math.PI*paramA**2,
                figure,
                input: paramA
            };
        case 'triangle':
            let p = (paramA+paramB+paramC) / 2;
            return {
                area: Math.sqrt(p*(p-paramA)*(p-paramB)*(p-paramC)),
                figure,
                input: [paramA, paramB, paramC]
            };
        default:
            throw Error('unknown figure');
    }
}


/*
// Example
console.log(calculateArea('square', 5));
console.log(calculateArea('circle', 10));
console.log(calculateArea('triangle', 7, 5.9, 3.2));
*/