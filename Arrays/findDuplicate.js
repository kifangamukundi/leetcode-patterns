/*
Given an array of integers nums containing n + 1 integers where 
each integer is in the range [1, n] inclusive.

There is only one repeated number in nums, return this repeated number.

You must solve the problem without modifying the array nums and uses only constant extra space.

Input: nums = [1,3,4,2,2]
Output: 2

Input: nums = [3,1,3,4,2]
Output: 3
*/

function findDuplicate(nums) {
    let slow = nums[0]; // Initialize slow pointer with the first element
    let fast = nums[0]; // Initialize fast pointer with the first element

    // Phase 1: Detect the intersection point of the two pointers
    do {
        slow = nums[slow]; // Move slow pointer one step
        fast = nums[nums[fast]]; // Move fast pointer two steps
    } while (slow !== fast && fast !== undefined);

    // Phase 2: Find the entrance to the cycle (repeated number)
    let pointer1 = nums[0]; // Initialize a pointer at the beginning
    let pointer2 = slow; // Start another pointer at the intersection point

    // Handle the case when there are no duplicates
    if (pointer1 === pointer2) {
        return pointer1; // Return the element since there are no duplicates
    }

    while (pointer1 !== pointer2) {
        pointer1 = nums[pointer1]; // Move pointer1 one step
        pointer2 = nums[pointer2]; // Move pointer2 one step
    }

    return pointer1; // Return the repeated number
}

// Example usage:
const nums = [1, 2, 3, 4, 2];
const repeatedNumber = findDuplicate(nums);
console.log(repeatedNumber); // Output: 2 (the repeated number)
