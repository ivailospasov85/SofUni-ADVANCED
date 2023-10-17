// You need to write unit tests for a function isOddOrEven() that checks whether the length of a passed string is even or odd.
// If the passed parameter is NOT a string return undefined. If the parameter is a string return either "even" or "odd" based on the length of the string.
// JS Code
// You are provided with an implementation of the isOddOrEven() function:

function isOddOrEven(string) {
    if (typeof (string) !== 'string') {
        return undefined;
    }
    if (string.length % 2 === 0) {
        return "even";
    }

    return "odd";
}


module.exports = isOddOrEven