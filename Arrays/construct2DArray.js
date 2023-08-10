/*
You are given a 0-indexed 1-dimensional (1D) integer array original, 
and two integers, m and n. 
You are tasked with creating a 2-dimensional (2D) array with  m rows and n columns 
using all the elements from original.

The elements from indices 0 to n - 1 (inclusive) of original 
should form the first row of the constructed 2D array, 
the elements from indices n to 2 * n - 1 (inclusive) 
should form the second row of the constructed 2D array, and so on.

Return an m x n 2D array constructed according to the above procedure, 
or an empty 2D array if it is impossible.

Input: original = [1,2,3,4], m = 2, n = 2
Output: [[1,2],[3,4]]
Explanation: The constructed 2D array should contain 2 rows and 2 columns.
The first group of n=2 elements in original, [1,2], 
becomes the first row in the constructed 2D array.
The second group of n=2 elements in original, [3,4], 
becomes the second row in the constructed 2D array.

Input: original = [1,2,3], m = 1, n = 3
Output: [[1,2,3]]
Explanation: The constructed 2D array should contain 1 row and 3 columns.
Put all three elements in original into the first row of the constructed 2D array.

Input: original = [1,2], m = 1, n = 1
Output: []
Explanation: There are 2 elements in original.
It is impossible to fit 2 elements in a 1x1 2D array, so return an empty 2D array.

*/

function construct2DArray(original, m, n) {
    const totalElements = m * n;
    if (original.length !== totalElements) {
        // If the original array length doesn't match the required total elements, return an empty array
        return []; 
    }
    
    // Initialize an empty array to store the 2D array
    const result = []; 
    
    // Initialize an index to keep track of the current position in the original array
    let index = 0; 

    // Loop through each row
    for (let i = 0; i < m; i++) {
        // Initialize an array for the current row
        const row = []; 
        // Loop through each column
        for (let j = 0; j < n; j++) {
            // Add the current element from the original array to the current row
            row.push(original[index]); 
            // Move to the next element in the original array
            index++; 
        }
        // Add the current row to the result 2D array
        result.push(row); 
    }

    // Return the constructed 2D array
    return result; 
}

// Example usage:
const original = [1, 2, 3, 4];
const m = 2;
const n = 2;
const twoDArray = construct2DArray(original, m, n);
console.log(twoDArray); // Output: [ [1, 2], [3, 4] ]
