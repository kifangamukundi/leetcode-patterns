/*
Given an integer array nums of length n where all the integers of nums are in the 
range [1, n] and each integer appears once or twice, 
return an array of all the integers that appears twice.

You must write an algorithm that runs in O(n) time and uses only constant extra space.

Input: nums = [4,3,2,7,8,2,3,1]
Output: [2,3]

Input: nums = [1,1,2]
Output: [1]

Input: nums = [1]
Output: []
*/

function findDuplicates(nums) {
    // Initialize an array to store the duplicate numbers
    const duplicates = []; 

    // Iterate through the array
    for (let i = 0; i < nums.length; i++) {
        // Calculate the absolute value of the current number
        const num = Math.abs(nums[i]); 
        
        if (nums[num - 1] < 0) {
            // If the number at index num - 1 is negative, it means we've encountered this number before
            // So, it's a duplicate, add it to the duplicates array
            duplicates.push(num);
        } else {
            // If the number at index num - 1 is positive, mark it as visited by negating its value
            nums[num - 1] = -nums[num - 1];
        }
    }

    // Return the array of duplicate numbers
    return duplicates; 
}

// Example usage:
const nums = [4, 3, 2, 7, 8, 2, 1];
const result = findDuplicates(nums);
console.log(result); // Output: [2]
