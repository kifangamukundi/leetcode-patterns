/*
Given an integer array nums, move all 0's to the end of it while 
maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]

Input: nums = [0]
Output: [0]
*/

function moveZeroes(nums) {
    if (nums.length <= 1) {
        return; // Nothing to do for empty array or array with just one element
    }
    
    let nonZeroIndex = 0; // Index to keep track of the next position to place a non-zero element
    
    // Loop through the array with the first pointer (i)
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            // Move the non-zero element to the correct position using the second pointer (nonZeroIndex)
            nums[nonZeroIndex] = nums[i];
            
            // Fill the original position with zero (if needed)
            if (i !== nonZeroIndex) {
                nums[i] = 0;
            }
            
            nonZeroIndex++; // Increment nonZeroIndex
        }
    }
}

// Example usage:
const nums = [0, 1, 0, 3, 12];
moveZeroes(nums);
console.log(nums); // Output: [1, 3, 12, 0, 0]
