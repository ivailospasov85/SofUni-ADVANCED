// You are given an array of numbers. Write a JS function that returns the elements at odd positions from the array, doubled and in reverse order.
// The input comes as an array of number elements.
// The output is the return on the console on a single line, separated by space.

function processOddPosition(arr) {
    let result = arr.filter((number, index) => index % 2 !== 0).map(number => number * 2).reverse()
    return result

}

processOddPosition([10, 15, 20, 25])