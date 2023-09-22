// Write a function that finds the elements at even positions in an array.
// The input comes as an array of string elements.
// The output is printed on the console. Collect all elements in a string, separated by space.


function evenPositionElement(input) {

    let result = []
    for (const element of input) {
        if (input.indexOf(element) % 2 === 0) {
            result.push(element)
        }
    }

    console.log(result.join(' '));
}

evenPositionElement(['20', '30', '40', '50', '60'])