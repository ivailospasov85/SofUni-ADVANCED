// Write a function that sorts an array of numbers so that the first element is the smallest one, the second is the biggest one, the third is the second smallest one, the fourth is the second biggest one, and so on. 
// Return the resulting array.


function sortingNumbers(array) {

    array.sort((a, b) => a - b)
    let length = array.length
    let indexToReplace = 1
    for (let index = 0; index < length / 2; index++) {

        let lastNumber = array.pop()
        array.splice(indexToReplace, 0, lastNumber)
        indexToReplace += 2

    }

    return array

}

sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])