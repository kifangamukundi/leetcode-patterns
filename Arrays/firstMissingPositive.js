/*
Given an unsorted integer array nums, return the smallest missing positive integer.

You must implement an algorithm that runs in O(n) time and uses O(1) auxiliary space.

Input: nums = [1,2,0]
Output: 3
Explanation: The numbers in the range [1,2] are all in the array.

Input: nums = [3,4,-1,1]
Output: 2
Explanation: 1 is in the array but 2 is missing.

Input: nums = [7,8,9,11,12]
Output: 1
Explanation: The smallest positive integer 1 is missing.
*/


function firstMissingPositive(nums) {
    // Get the length of the input array
    const n = nums.length; 

    // Perform cyclic sort
    for (let i = 0; i < n; i++) {
        while (nums[i] > 0 && nums[i] <= n && nums[nums[i] - 1] !== nums[i]) {
            // Swap nums[i] with the number at its correct position (nums[i] - 1)
            [nums[nums[i] - 1], nums[i]] = [nums[i], nums[nums[i] - 1]];
        }
    }

    // Find the first missing positive integer
    for (let i = 0; i < n; i++) {
        if (nums[i] !== i + 1) {
            // Return the smallest missing positive integer
            return i + 1; 
        }
    }

    // If all positive integers from 1 to n are present, return n + 1
    return n + 1; 
}

// Example usage:
const nums = [1,2,0];
const result = firstMissingPositive(nums);
console.log(result); // Output: 3

const nums2 = [3,4,-1,1];
const result2 = firstMissingPositive(nums2);
console.log(result2); // Output: 2

const nums3 = [7,8,9,11,12];
const result3 = firstMissingPositive(nums3);
console.log(result3); // Output: 1