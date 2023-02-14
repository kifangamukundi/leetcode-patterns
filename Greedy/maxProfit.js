// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.

// Simple Approach
// This function iterates through the array of prices and keeps track of the minimum price seen so far, as well as the maximum profit that can be obtained by selling at the current price. It returns the maximum profit seen. The time complexity of this algorithm is O(n) since it only loops through the array once.

function maxProfit(prices) {
    let minPrice = Infinity;
    let maxProfit = 0;
    
    for (let price of prices) {
        minPrice = Math.min(minPrice, price);
        maxProfit = Math.max(maxProfit, price - minPrice);
    }
    
    return maxProfit;
}

// dynamic programming Approach
function maxProfit(prices) {
    if (prices.length < 2) {
        return 0;
    }
    
    const dp = new Array(prices.length).fill(0);
    let minPrice = prices[0];
    
    for (let i = 1; i < prices.length; i++) {
        dp[i] = Math.max(dp[i-1], prices[i] - minPrice);
        minPrice = Math.min(minPrice, prices[i]);
    }
    
    return dp[prices.length-1];
}

// The approach is to maintain an array dp where dp[i] represents the maximum profit that can be obtained by selling on day i. The array is filled in a forward direction, and each element is calculated based on the minimum price seen so far and the current price.

// The time complexity of this algorithm is also O(n), but it has a space complexity of O(n), which may not be suitable for very large input sizes. Nonetheless, this approach is useful when the problem constraints are more complex and require additional information to be tracked.
