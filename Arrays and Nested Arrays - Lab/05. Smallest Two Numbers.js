// Write a function that prints the two smallest elements from an array of numbers.
// The input comes as an array of number elements.
// The output is printed on the console on a single line, separated by space


function smallestOfTwoNumbers(array) {


    let sortedArr = array.sort((a, b) => a - b)
    console.log(sortedArr[0], sortedArr[1]);
}

smallestOfTwoNumbers([30, 15, 50, 5])