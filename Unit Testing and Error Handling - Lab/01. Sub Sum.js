
// Write a function to sum a range of numeric elements from an array.

// The function takes three parameters - the first is an array, the second is the start index and the third is the end index. Both indexes are inclusive. Have in mind that the array elements may not be of type Number and cast everything. Implement the following error handling:

// · If the first element is not an array, return NaN

// · If the start index is less than zero, consider its value to be a zero

// · If the end index is outside the bounds of the array, assume it points to the last index of the array

// Input / Output

// Your function must take three parameters. As output, return the sum.


function subSum(arr, start, end) {

    if (!Array.isArray(arr)) {
        return NaN
    }
    let startIndex = Math.max(start, 0)
    let endIndex = Math.min(end, arr.length - 1)

    let sum = arr.slice(startIndex, endIndex + 1).map(Number).reduce((a, x) => a + Number(x), 0)
    
    return sum

}

subSum([10, 20, 30, 40, 50, 60], 3, 300)