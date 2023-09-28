// // Write a function that composes an object by given properties. The input comes as an array of strings. 
// Every even index of the array represents the name of the food. Every odd index is a number that is equal to the calories in 100 grams of the given product. 
// Assign each value to its corresponding property, and finally print the object.
// // The input comes as an array of string elements.
// // The output should be printed on the console.


function clorieObject(input) {

    let result = {}

    for (let index = 0; index < input.length; index += 2) {
        let key = input[index];
        let data = Number(input[index + 1]);

        result[key] = data

    }
    console.log(result);
}



clorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])