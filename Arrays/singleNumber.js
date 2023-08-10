/* Given a non-empty array of integers nums, 
every element appears twice except for one. Find that single one.
You must implement a solution with a linear runtime complexity and use only constant extra space.
*/

// Input: nums = [2,2,1]
// Output: 1

// Input: nums = [4,1,2,1,2]
// Output: 4

// Input: nums = [1]
// Output: 1

function singleNumber(nums) {
  // Initialize a variable to store the single number
  let result = 0; 
  
  for (let num of nums) {
    // Perform XOR operation with the current number
      result ^= num; 
  }
  
  // Return the single number that appears only once
  return result; 
}

// Example usage:
const nums = [4, 1, 2, 1, 2];
const single = singleNumber(nums);
console.log(single); // Output: 4