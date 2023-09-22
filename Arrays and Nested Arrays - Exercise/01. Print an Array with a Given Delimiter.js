// The input comes as two parameters – an array of strings and a string. The second parameter is the delimiter.
// The output is the elements of the array, printed on the console, each element separated from the others by the given delimiter.

function printArr(array, string) {

    let delimiter = string
    let result = []

    array.forEach(element => {
        result.push(element)
        result.push(delimiter)
    });

    let junk = result.pop()
    console.log(result.join(''));

}

printArr(['One',
    'Two',
    'Three',
    'Four',
    'Five'],
    '-'
)