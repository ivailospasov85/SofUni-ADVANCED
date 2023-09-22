// Write a function that finds the biggest element inside a matrix.
// The input comes as an array of arrays, containing number elements (2D matrix of numbers).
// The output is the return value of your function. Find the biggest element and return it.


function theBigersElement(input) {


    let theBiggestElement = input[0][0];

    for (let element of input) {

        for (let el of element) {

            if (el > theBiggestElement) {
                theBiggestElement = el
            }

        }
    }
    return theBiggestElement
}

theBigersElement([[20, 50, 10],
[8, 33, 145], [155, 166, 2333]]
)