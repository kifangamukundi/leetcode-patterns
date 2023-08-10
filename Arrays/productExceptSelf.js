/*
Given an integer array nums, return an array answer such that 
answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.

Input: nums = [1,2,3,4]
Output: [24,12,8,6]

Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]
*/

function productExceptSelf(nums) {
    // Get the length of the input array
    const n = nums.length; 
    // Initialize an array to store the final answer
    const answer = new Array(n); 
    
    // Calculate left prefix products and store them in the answer array
    // Initialize a variable to keep track of the running product from the left
    let leftProduct = 1; 
    for (let i = 0; i < n; i++) {
        // Store the running product from the left at the current position
        answer[i] = leftProduct; 
        // Update the running product with the current element
        leftProduct *= nums[i]; 
    }

    // Calculate right prefix products and update the answer array
    // Initialize a variable to keep track of the running product from the right
    let rightProduct = 1; 
    for (let i = n - 1; i >= 0; i--) {
        // Update the running product by multiplying with the product from the right
        answer[i] *= rightProduct; 
        // Update the running product from the right with the current element
        rightProduct *= nums[i]; 
    }

    // Return the final answer array
    return answer; 
}

// Example usage:
const nums = [1, 2, 3, 4];
const result = productExceptSelf(nums);
console.log(result); // Output: [24, 12, 8, 6]
