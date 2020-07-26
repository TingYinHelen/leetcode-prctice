var maxProfit = function(prices) {
    let sum = 0;
    let prev = prices[0];
    for (let index = 1; index < prices.length; index++) {
        if (prices[index] > prev) {
            sum = sum + (prices[index] - prev);
        }
        prev = prices[index];
    }
    return sum;
};

console.log('result:', maxProfit([7,1,5,3,6,4]));