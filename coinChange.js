// function coinChange (coins, amount) {
//     const memo = [];
//     function dp (n) {
//         if (n === 0) return 0;
//         if (n < 0) return -1;
//         if (memo[n] !== undefined) return memo[n];
//         let res = Infinity;
//         for (const coin of coins) {
//             const sub = dp(n - coin);
//             memo[n - coin] = sub;
//             if (sub === -1) continue;
//             res = Math.min(res, sub + 1);
//         }
//         if (res === Infinity) return -1;
//         return res;
//     }

//     return dp(amount);
// }

function coinChange (coins, amount) {
    const dp = new Array(amount + 1).fill(amount + 1);
    dp[0] = 0;
    for (let n = 0; n < amount+1; n++ ) {
        for (const coin of coins) {
            if (n - coin < 0) continue;
            dp[n] = Math.min(dp[n], dp[n - coin] + 1);
        }
    }
    return (dp[amount] === amount + 1) ? -1 : dp[amount];
}

console.log(coinChange([186,419,83,408], 6249));
// console.log(coinChange([1,2,5], 11));
// console.log(coinChange([2], 3));