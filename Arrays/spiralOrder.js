/*
Given an m x n matrix, return all elements of the matrix in spiral order.

Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [1,2,3,6,9,8,7,4,5]

Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
Output: [1,2,3,4,8,12,11,10,9,5,6,7]
*/

function spiralOrder(matrix) {
    const result = []; // Initialize an array to store the elements in spiral order
    
    if (matrix.length === 0) {
        return result; // Return an empty array if the matrix is empty
    }
    
    let top = 0; // Initialize the top boundary
    let bottom = matrix.length - 1; // Initialize the bottom boundary
    let left = 0; // Initialize the left boundary
    let right = matrix[0].length - 1; // Initialize the right boundary
    
    while (top <= bottom && left <= right) {
        // Traverse the top row from left to right
        for (let i = left; i <= right; i++) {
            result.push(matrix[top][i]);
        }
        top++; // Move the top boundary down
        
        // Traverse the right column from top to bottom
        for (let i = top; i <= bottom; i++) {
            result.push(matrix[i][right]);
        }
        right--; // Move the right boundary left
        
        // Traverse the bottom row from right to left (if applicable)
        if (top <= bottom) {
            for (let i = right; i >= left; i--) {
                result.push(matrix[bottom][i]);
            }
            bottom--; // Move the bottom boundary up
        }
        
        // Traverse the left column from bottom to top (if applicable)
        if (left <= right) {
            for (let i = bottom; i >= top; i--) {
                result.push(matrix[i][left]);
            }
            left++; // Move the left boundary right
        }
    }
    
    return result; // Return the elements in spiral order
}

// Example usage:
const matrix = [[1,2,3],[4,5,6],[7,8,9]];
const result = spiralOrder(matrix);
console.log(result); // Output: [1,2,3,6,9,8,7,4,5]

const matrix2 = [[1,2,3,4],[5,6,7,8],[9,10,11,12]];
const result2 = spiralOrder(matrix2);
console.log(result2); Output: [1,2,3,4,8,12,11,10,9,5,6,7]
