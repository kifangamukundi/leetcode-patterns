/*
You are given an n x n 2D matrix representing an image, 
rotate the image by 90 degrees (clockwise).

You have to rotate the image in-place, 
which means you have to modify the input 2D matrix directly. 
DO NOT allocate another 2D matrix and do the rotation.

Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [[7,4,1],[8,5,2],[9,6,3]]

Input: matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
Output: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]
*/

function rotate(matrix) {
    const n = matrix.length; // Get the size of the matrix
    
    // Transpose the matrix (swap rows and columns)
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            // Swap elements across the diagonal
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }
    
    // Reverse each row to complete the rotation
    for (let i = 0; i < n; i++) {
        matrix[i].reverse();
    }
}

// Example usage:
const image = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
rotate(image);
console.log(image); // Output: [[7,4,1],[8,5,2],[9,6,3]]

const image2 = [
    [5,1,9,11],
    [2,4,8,10],
    [13,3,6,7],
    [15,14,12,16]
];
rotate(image2);
console.log(image2); // Output: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]
