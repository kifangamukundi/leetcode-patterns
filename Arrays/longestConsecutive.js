/*
Given an unsorted array of integers nums, 
return the length of the longest consecutive elements sequence.

You must write an algorithm that runs in O(n) time.

Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. 
Therefore its length is 4.

Input: nums = [0,3,7,2,5,8,4,6,0,1]
Output: 9
*/

function longestConsecutive(nums) {
    if (nums.length === 0) {
        return 0; // Return 0 for an empty array
    }

    // Create a hash set to store unique numbers
    const numSet = new Set(nums); 
    // Initialize the variable to track the longest consecutive streak
    let longestStreak = 0; 

    for (const num of numSet) {
        if (!numSet.has(num - 1)) {
            // Check if num - 1 is not in the hash set (start of potential sequence)
            let currentNum = num;
            let currentStreak = 1; // Initialize the streak length

            // Keep expanding the sequence by checking consecutive numbers
            while (numSet.has(currentNum + 1)) {
                currentNum++;
                currentStreak++;
            }

            // Update longestStreak
            longestStreak = Math.max(longestStreak, currentStreak); 
        }
    }

    // Return the longest consecutive sequence length
    return longestStreak;
}

// Example usage:
const nums = [100, 4, 200, 1, 3, 2];
const result = longestConsecutive(nums);
console.log(result); // Output: 4

const nums2 = [0,3,7,2,5,8,4,6,0,1];
const result2 = longestConsecutive(nums2);
console.log(result2); // Output: 9