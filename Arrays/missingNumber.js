/* 
Given an array nums containing n distinct numbers in the range [0, n], 
return the only number in the range that is missing from the array.

Input: nums = [3,0,1]
Output: 2
Explanation: n = 3 since there are 3 numbers, 
so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.

Input: nums = [0,1]
Output: 2
Explanation: n = 2 since there are 2 numbers, 
so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.

Input: nums = [9,6,4,2,3,5,7,0,1]
Output: 8
Explanation: n = 9 since there are 9 numbers, 
so all numbers are in the range [0,9]. 8 is the missing number in the range since it does not appear in nums.
*/

// Time complexity: O(n)
// Space complexity: O(1)
function missingNumber(nums) {
  // Initialize missing with the value of nums.length, assuming the missing number is n
  let missing = nums.length; 

  for (let i = 0; i < nums.length; i++) {
    // XOR missing with i and nums[i]
    // This cancels out the duplicate numbers and keeps track of the missing number
    missing ^= i ^ nums[i];
  }

  // Return the missing number
  return missing;
}

// Time complexity: O(n)
// Space complexity: O(1)
function missingNumber2(nums) {
  // Calculate the expected sum using the formula (n * (n + 1)) / 2
  let expectedSum = nums.length * (nums.length + 1) / 2;
  // Initialize the actual sum variable
  let actualSum = 0;

  for (let i = 0; i < nums.length; i++) {
    // Calculate the actual sum by adding each number in the array
    actualSum += nums[i];
  }

  // Return the difference between the expected sum and the actual sum, which represents the missing number
  return expectedSum - actualSum;
}

// Time complexity: O(n)
// Space complexity: O(1)
function missingNumber3(nums) {
  // Get the length of the array
  const n = nums.length;
  // Calculate the expected sum using the formula (n * (n + 1)) / 2
  const expectedSum = (n * (n + 1)) / 2;
  // Use the reduce method to calculate the actual sum of all elements in the array
  // The callback function takes the accumulator (sum) and the current element (num)
  // It adds the current element to the accumulator for each iteration
  // The initial value of the accumulator is 0
  const actualSum = nums.reduce((sum, num) => sum + num, 0);

  // Return the difference between the expected sum and the actual sum, which represents the missing number
  return expectedSum - actualSum;
}

// Testing
const nums1 = [3,0,1];  // Missing: 2
console.log(missingNumber(nums1));  // Output: 2
console.log(missingNumber2(nums1));  // Output: 2
console.log(missingNumber3(nums1));  // Output: 2

const nums2 = [9,6,4,2,3,5,7,0,1];  // Missing: 8
console.log(missingNumber(nums2));  // Output: 8
console.log(missingNumber2(nums2));  // Output: 8
console.log(missingNumber3(nums2));  // Output: 8