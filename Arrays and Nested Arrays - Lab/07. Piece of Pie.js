// Write a function that receives three parameters – an array of pie flavors as strings, two target flavors as strings. The result of the function should be a new array, 
// containing a section of the original array, starting at the first flavor parameter, and ending at (and including) the second flavor parameter.
// // The input comes as three arguments:
// •	An array of strings, representing pie flavors
// •	Two more strings, representing the start and end of the section, respectively
// The output is the return value of the function and should be an array of strings.

function pieceOfPie(arr, startingPion, endingPoint) {

    let startIndex=arr.indexOf(startingPion)
    let endIndex=arr.indexOf(endingPoint)

    let result = arr.slice(startIndex,endIndex+1)
    
    return result
}

pieceOfPie(
    ['Pumpkin Pie',
        'Key Lime Pie',
        'Cherry Pie',
        'Lemon Meringue Pie',
        'Sugar Cream Pie'],
    'Key Lime Pie',
    'Lemon Meringue Pie'
)










