var numWays = function(n) {
    const dp = new Array(n + 1).fill(0);
    dp[0] = 1;
    dp[1] = 1;
    dp[2] = 2;
    for (let i = 3; i < n + 1; i++) {
        dp[i] = (dp[i - 1] + dp[i - 2]) % 1000000007;
    }
    return dp[n];
};
console.log('numWays(7)====', numWays(44));
