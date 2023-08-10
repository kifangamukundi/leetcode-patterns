/*
Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.

You must do it in place.

Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
Output: [[1,0,1],[0,0,0],[1,0,1]]

Input: matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]
*/

function setZeroes(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    let firstRowHasZero = false; // Marker to track if the first row needs to be zeroed out
    let firstColHasZero = false; // Marker to track if the first column needs to be zeroed out

    // Check if the first row and first column need to be zeroed out
    for (let j = 0; j < cols; j++) {
        if (matrix[0][j] === 0) {
            firstRowHasZero = true;
            break;
        }
    }

    for (let i = 0; i < rows; i++) {
        if (matrix[i][0] === 0) {
            firstColHasZero = true;
            break;
        }
    }

    // Use the first row and first column as markers
    for (let i = 1; i < rows; i++) {
        for (let j = 1; j < cols; j++) {
            if (matrix[i][j] === 0) {
                matrix[i][0] = 0; // Mark the first column for this row
                matrix[0][j] = 0; // Mark the first row for this column
            }
        }
    }

    // Set rows to zero except the first row
    for (let i = 1; i < rows; i++) {
        if (matrix[i][0] === 0) {
            for (let j = 1; j < cols; j++) {
                matrix[i][j] = 0; // Zero out the entire row
            }
        }
    }

    // Set columns to zero except the first column
    for (let j = 1; j < cols; j++) {
        if (matrix[0][j] === 0) {
            for (let i = 1; i < rows; i++) {
                matrix[i][j] = 0; // Zero out the entire column
            }
        }
    }

    // Zero out the first row if needed
    if (firstRowHasZero) {
        for (let j = 0; j < cols; j++) {
            matrix[0][j] = 0;
        }
    }

    // Zero out the first column if needed
    if (firstColHasZero) {
        for (let i = 0; i < rows; i++) {
            matrix[i][0] = 0;
        }
    }
}

// Example usage:
const matrix =[[1,1,1],[1,0,1],[1,1,1]];
setZeroes(matrix);
console.log(matrix);

const matrix2 = [[0,1,2,0],[3,4,5,2],[1,3,1,5]];
setZeroes(matrix2);
console.log(matrix2);