// Given an array nums of n integers where nums[i] is in the range [1, n], 
// return an array of all the integers in the range [1, n] that do not appear in nums.

// Input: nums = [4,3,2,7,8,2,3,1]
// Output: [5,6]

// Input: nums = [1,1]
// Output: [2]

function findDisappearedNumbers(nums) {
  // Initialize an array to store missing numbers
  const result = []; 
  
  // Step 1: Mark the presence of elements using negative values
  for (let i = 0; i < nums.length; i++) {
    // Calculate the index based on the element value
      const index = Math.abs(nums[i]) - 1; 
      if (nums[index] > 0) {
        // Negate the value at the calculated index
          nums[index] = -nums[index]; 
      }
  }

  // Step 2: Find indices with positive values (absence of element) and push to result
  for (let i = 0; i < nums.length; i++) {
      if (nums[i] > 0) {
        // Push the missing number (index + 1) to the result array
          result.push(i + 1); 
      }
  }

  // Return the array containing missing numbers
  return result; 
}

// Example usage:
const nums = [4, 3, 2, 7, 8, 2, 1, 6];
const missingNumbers = findDisappearedNumbers(nums);

const nums2 = [4,3,2,7,8,2,3,1];
const missingNumbers2 = findDisappearedNumbers(nums2);
console.log(missingNumbers2)
// Output: [5]
console.log(missingNumbers);