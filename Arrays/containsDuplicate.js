// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Input: nums = [1,2,3,1]
// Output: true

// Input: nums = [1,2,3,4]
// Output: false

// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true

function containsDuplicate(nums) {
    return new Set(nums).size < nums.length;
}

// This function takes an array nums as input and returns true if there are duplicates in the array, and false otherwise. It uses the Set object in JavaScript to create a set of unique values from the array, and then compares the size of the set to the length of the array to check if there are duplicates.