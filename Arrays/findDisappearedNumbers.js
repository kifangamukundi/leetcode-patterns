// Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.

// Input: nums = [4,3,2,7,8,2,3,1]
// Output: [5,6]

// Input: nums = [1,1]
// Output: [2]


// The function first initializes an array seen of length n + 1 to keep track of which integers from the range [1, n] are present in the input array. It then loops through the input array, marking each seen integer as true in the seen array.

// Finally, it loops through the range [1, n], adding any integer that is not marked as seen in the seen array to the result array.

function findDisappearedNumbers(nums) {
    const n = nums.length;
    const result = [];
    const seen = new Array(n + 1).fill(false);
  
    for (let i = 0; i < n; i++) {
      seen[nums[i]] = true;
    }
  
    for (let i = 1; i <= n; i++) {
      if (!seen[i]) {
        result.push(i);
      }
    }
  
    return result;
  }

// Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.

function findDisappearedNumbers(nums) {
    const n = nums.length;
    const result = [];
  
    // Mark seen numbers as negative
    for (let i = 0; i < n; i++) {
      const index = Math.abs(nums[i]) - 1;
      if (nums[index] > 0) {
        nums[index] = -nums[index];
      }
    }
  
    // Add missing numbers to result array
    for (let i = 0; i < n; i++) {
      if (nums[i] > 0) {
        result.push(i + 1);
      }
    }
  
    return result;
  }

// The function modifies the input array by marking seen numbers as negative. For each number num in the array, it finds the index index of the corresponding number in the range [1, n] by subtracting 1 from num and taking the absolute value. If the number at index index is positive, it is marked as seen by changing its sign to negative.

// Finally, the function loops through the input array again and adds any positive number (i.e., any number that was not seen) to the result array.
