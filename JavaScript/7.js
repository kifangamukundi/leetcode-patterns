// Given an integer array nums, handle multiple queries of the following type:

// Calculate the sum of the elements of nums between indices left and right inclusive where left <= right.
// Implement the NumArray class:

// NumArray(int[] nums) Initializes the object with the integer array nums.
// int sumRange(int left, int right) Returns the sum of the elements of nums between indices left and right inclusive (i.e. nums[left] + nums[left + 1] + ... + nums[right]).

// Input
// ["NumArray", "sumRange", "sumRange", "sumRange"]
// [[[-2, 0, 3, -5, 2, -1]], [0, 2], [2, 5], [0, 5]]
// Output
// [null, 1, -1, -3]

// Explanation
// NumArray numArray = new NumArray([-2, 0, 3, -5, 2, -1]);
// numArray.sumRange(0, 2); // return (-2) + 0 + 3 = 1
// numArray.sumRange(2, 5); // return 3 + (-5) + 2 + (-1) = -1
// numArray.sumRange(0, 5); // return (-2) + 0 + 3 + (-5) + 2 + (-1) = -3


class NumArray {
    constructor(nums) {
      this.prefixSum = new Array(nums.length);
      this.prefixSum[0] = nums[0];
      for (let i = 1; i < nums.length; i++) {
        this.prefixSum[i] = this.prefixSum[i - 1] + nums[i];
      }
    }
  
    sumRange(left, right) {
      if (left === 0) {
        return this.prefixSum[right];
      } else {
        return this.prefixSum[right] - this.prefixSum[left - 1];
      }
    }
  }

// You can implement the NumArray class using dynamic programming. First, create an array prefixSum of the same size as nums. Each element i of prefixSum will store the sum of the first i elements of nums. Then, to calculate the sum of the elements of nums between indices left and right, simply return prefixSum[right] - prefixSum[left-1] if left is greater than 0, or prefixSum[right] otherwise (since the sum of the first element in nums is just nums[0]).

// The time complexity of NumArray initialization is O(n), where n is the length of the input array nums. The time complexity of each sumRange query is O(1).


// The solution I provided earlier has a time complexity of O(n) for initialization and O(1) for each query. This is already an optimal solution for this problem.

// However, there is a way to optimize the sumRange function further. Instead of checking if left is equal to 0 and returning prefixSum[right], we can initialize prefixSum with a dummy 0th element (i.e., this.prefixSum = [0, ...nums]), which allows us to simplify the sumRange function to always return prefixSum[right + 1] - prefixSum[left].

class NumArray {
    constructor(nums) {
      this.prefixSum = new Array(nums.length + 1);
      this.prefixSum[0] = 0;
      for (let i = 1; i <= nums.length; i++) {
        this.prefixSum[i] = this.prefixSum[i - 1] + nums[i - 1];
      }
    }
  
    sumRange(left, right) {
      return this.prefixSum[right + 1] - this.prefixSum[left];
    }
  }

// This optimized implementation has the same time complexity as the previous implementation, but with a slightly simplified sumRange function.
  