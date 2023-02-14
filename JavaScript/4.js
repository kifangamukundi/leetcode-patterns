// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

// Input: nums = [2,2,1]
// Output: 1

// Input: nums = [4,1,2,1,2]
// Output: 4

// Input: nums = [1]
// Output: 1

function singleNumber(nums) {
    let result = 0;
    for (let i = 0; i < nums.length; i++) {
      result ^= nums[i];
    }
    return result;
  }

// In this code, we initialize a variable result to 0, and then loop through the array using a for loop. In each iteration, we perform the XOR operation between the current element and the result variable, and store the result back in result. Since the XOR operation is associative and commutative, the final value of result will be the single number that appears only once in the array.