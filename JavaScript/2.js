// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

// Input: nums = [3,0,1]
// Output: 2
// Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.

// Input: nums = [0,1]
// Output: 2
// Explanation: n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.

// Input: nums = [9,6,4,2,3,5,7,0,1]
// Output: 8
// Explanation: n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 8 is the missing number in the range since it does not appear in nums.

// The idea is to use XOR to cancel out the numbers that are present in the array and keep the missing number. We start by XORing the length of the array with the numbers in the range [0, n]. This will cancel out all the numbers that are present in the array, leaving only the missing number.

function missingNumber(nums) {
    let missing = nums.length;
    for (let i = 0; i < nums.length; i++) {
      missing ^= i ^ nums[i];
    }
    return missing;
  }

// A solution using only O(1) extra space complexity and O(n) runtime complexity

function missingNumber(nums) {
    let expectedSum = nums.length * (nums.length + 1) / 2;
    let actualSum = 0;
    for (let i = 0; i < nums.length; i++) {
      actualSum += nums[i];
    }
    return expectedSum - actualSum;
  }

// The idea is to use the sum formula to calculate the expected sum of the range [0, n], and then subtract the actual sum of the numbers in the array to find the missing number. Since we're only using a constant amount of space to store the expected sum and the actual sum, this solution has O(1) extra space complexity. The for loop to calculate the actual sum takes O(n) time, so the overall runtime complexity is O(n).