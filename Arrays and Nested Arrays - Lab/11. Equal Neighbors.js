// Write a function that finds the number of equal neighbor pairs inside a matrix of variable size and type (numbers or strings).
// The input comes as an array of arrays, containing string elements (2D matrix of strings).
// The output is the return value of your function. Save the number of equal pairs you find and return it.


function countEqualNeighborPairs(matrix) {
    let equalPairs = 0;

    // Define directions for neighboring elements (front, back, top, bottom, left, right)
    const directions = [
        [0, 0, 1], // front
        [0, 0, -1], // back
        [0, 1, 0], // top
        [0, -1, 0], // bottom
        [-1, 0, 0], // left
        [1, 0, 0] // right
    ];

    // Iterate through each element in the matrix
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            for (let k = 0; k < matrix[i][j].length; k++) {
                const currentElement = matrix[i][j][k];

                // Check neighbors in all directions
                for (const [dx, dy, dz] of directions) {
                    const newDepth = i + dx;
                    const newRow = j + dy;
                    const newCol = k + dz;

                    // Check if the neighbor is within the matrix boundaries
                    if (
                        newDepth >= 0 && newDepth < matrix.length &&
                        newRow >= 0 && newRow < matrix[i].length &&
                        newCol >= 0 && newCol < matrix[i][j].length &&
                        matrix[newDepth][newRow][newCol] === currentElement
                    ) {
                        equalPairs++;
                    }
                }
            }
        }
    }

    return equalPairs;
}

// Example usage:
const matrix = [
    [['2', '3', '4', '7', '0'],
    ['4', '0', '5', '3', '4'],
    ['2', '3', '5', '4', '2'],
    ['9', '8', '7', '5', '4']]
];

const numberOfEqualPairs = countEqualNeighborPairs(matrix);
console.log(numberOfEqualPairs); // Output: 26



