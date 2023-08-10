/* 
Given an integer array nums, return true if any value appears at least twice in the array, 
and return false if every element is distinct.

Input: nums = [1,2,3,1]
Output: true

Input: nums = [1,2,3,4]
Output: false

Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true
*/

// Time complexity - O(n)
// Space complexity - O(n)
function containsDuplicate(nums) {
    // Object to track visited elements
    const visited = {}; 
    
    for (let num of nums) {
    // If the current element has already been visited
      if (visited[num]) { 
        // Found a duplicate, return true
        return true; 
      }
      // Mark the current element as visited
      visited[num] = true; 
    }
    
    // No duplicates found, return false
    return false; 
}

// Time complexity - O(n log n)
// Space complexity - O(1)
function containsDuplicate2(nums) {
    // Sort the array in ascending order; NB - sorting modifies the original array
    nums.sort((a, b) => a - b); 
    
    for (let i = 0; i < nums.length - 1; i++) {
        // If the current number is equal to the next number
        if (nums[i] === nums[i + 1]) {
            // Found a duplicate, return true
            return true; 
        }
    }
    
    // No duplicates found, return false
    return false; 
};

// Time complexity - O(n)
// Space complexity - O(n)
function containsDuplicate3(nums) {
    // Create a Set from the array
    const numSet = new Set(nums); 
    
    // If the size of the Set is less than the array length, there are duplicates
    return numSet.size < nums.length;
};

// Testing
const nums1 = [1, 2, 3, 4, 5];  // No duplicates
console.log(containsDuplicate(nums1));  // Output: false
console.log(containsDuplicate2(nums1));  // Output: false
console.log(containsDuplicate3(nums1));  // Output: false

const nums2 = [1, 2, 3, 2, 5];  // Duplicates: 2
console.log(containsDuplicate(nums2));  // Output: true
console.log(containsDuplicate2(nums2));  // Output: true
console.log(containsDuplicate3(nums2));  // Output: true