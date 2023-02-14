// Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n), ans[i] is the number of 1's in the binary representation of i.

// Input: n = 2
// Output: [0,1,1]
// Explanation:
// 0 --> 0
// 1 --> 1
// 2 --> 10

// Input: n = 5
// Output: [0,1,1,2,1,2]
// Explanation:
// 0 --> 0
// 1 --> 1
// 2 --> 10
// 3 --> 11
// 4 --> 100
// 5 --> 101

function countBits(n) {
    const ans = new Array(n+1).fill(0);
    for (let i = 1; i <= n; i++) {
      ans[i] = ans[i >> 1] + (i & 1);
    }
    return ans;
  }

//   Explanation:

//   We create a new array ans of length n+1, filled with zeros using new Array(n+1).fill(0).
//   We loop through all integers from 1 to n and compute the number of 1's in their binary representation using the following formula:
//   The number of 1's in i is equal to the number of 1's in i >> 1 (i.e., i shifted one bit to the right) plus the least significant bit of i (i.e., i & 1).
//   For example, if i is 5 (binary 101), then i >> 1 is 2 (binary 010) and i & 1 is 1. So the number of 1's in 5 is the number of 1's in 2 (which is 1) plus 1, which is 2.
//   We return the ans array.
//   For example, countBits(5) would return [0, 1, 1, 2, 1, 2], which means that:
  
//   The binary representation of 0 has 0 1's.
//   The binary representation of 1 has 1 1's.
//   The binary representation of 2 has 1 1's.
//   The binary representation of 3 has 2 1's.
//   The binary representation of 4 has 1 1's.
//   The binary representation of 5 has 2 1's.


// Can you do it in linear time O(n) and possibly in a single pass?

function countBits(n) {
    const ans = new Array(n+1).fill(0);
    for (let i = 1; i <= n; i++) {
      ans[i] = ans[i & (i-1)] + 1;
    }
    return ans;
  }

//   Explanation:

// We create a new array ans of length n+1, filled with zeros using new Array(n+1).fill(0).
// We loop through all integers from 1 to n and compute the number of 1's in their binary representation using the following formula:
// The number of 1's in i is equal to the number of 1's in i with its least significant bit removed (i.e., i & (i-1)) plus 1.
// The i & (i-1) operation removes the least significant bit of i, which is a 0 if i is even and a 1 if i is odd. For example, if i is 5 (binary 101), then i & (i-1) is 4 (binary 100).
// Since i & (i-1) is less than i, we have already computed the number of 1's in its binary representation and stored it in the ans array. So we can use it to compute the number of 1's in i in constant time.
// We return the ans array.
// For example, countBits(5) would return [0, 1, 1, 2, 1, 2], which means that:

// The binary representation of 0 has 0 1's.
// The binary representation of 1 has 1 1's.
// The binary representation of 2 has 1 1's.
// The binary representation of 3 has 2 1's.
// The binary representation of 4 has 1 1's.
// The binary representation of 5 has 2 1's.
// Note that this algorithm runs in linear time O(n) and in a single pass, since we only need to loop through all integers from 1 to n once, and we use constant time operations to compute the number of 1's in each integer.