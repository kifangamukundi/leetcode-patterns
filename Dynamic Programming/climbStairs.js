// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps

// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step


function climbStairs(n) {
    if (n <= 2) {
      return n;
    }
    let dp = new Array(n + 1);
    dp[1] = 1;
    dp[2] = 2;
    for (let i = 3; i <= n; i++) {
      dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
  }

// The climbStairs function takes an integer n as input and returns the number of distinct ways to climb the staircase.

// The first if statement checks if n is 1 or 2, in which case there are only 1 and 2 distinct ways, respectively.

// Otherwise, the function initializes an array dp of size n+1 to store the number of distinct ways to climb each step. The base cases are dp[1] = 1 and dp[2] = 2.

// Then, the function uses a loop to fill in the array dp from step 3 to step n using the recurrence relation dp[i] = dp[i - 1] + dp[i - 2], which means that the number of distinct ways to climb step i is equal to the sum of the number of distinct ways to climb steps i-1 and i-2.

// Finally, the function returns dp[n], which is the number of distinct ways to climb to the top of the staircase.