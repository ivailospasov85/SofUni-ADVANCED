// Write a function that orders a given array of strings, by a length in ascending order as primary criteria, and by alphabetical value in ascending order as second criteria. The comparison should be case-insensitive.
// The input comes as an array of strings.
// The output is the elements of the ordered array of strings, printed each on a new line.


function sortArrayByTwoCriteria(input) {

    input.sort((a, b) => a.length - b.length)
    // input.sort((a, b) => a.toUpperCase().localeCompare(b.toUpperCase()))
    input.forEach(element => {
        console.log(element);
    });
    
}

sortArrayByTwoCriteria(['Isacc', 
'Theodor', 
'Jack', 
'Harrison', 
'George']




)