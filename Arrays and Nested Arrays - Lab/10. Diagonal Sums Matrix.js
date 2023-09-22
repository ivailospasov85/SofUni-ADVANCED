// A square matrix of numbers comes as an array of strings, each string holding numbers (space separated). Write a function that finds the sum at the main and the secondary diagonals.
// The input comes as an array of arrays, containing number elements (2D matrix of numbers).
// The output is printed on the console, on a single line separated by space. First print the sum at the main diagonal, then the sum at the secondary diagonal.


function sumDiagonals(matrix) {
    let mainDiagonalSum = 0;
    let secondaryDiagonalSum = 0;
    let n = matrix.length;

    for (let i = 0; i < n; i++) {
        mainDiagonalSum += matrix[i][i];
        secondaryDiagonalSum += matrix[i][n - i - 1];
    }

    console.log(mainDiagonalSum, secondaryDiagonalSum);
}

sumDiagonals([[3, 5, 17],
[-1, 7, 14],
[1, -8, 89]])




