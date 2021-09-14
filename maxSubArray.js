var maxSubArray = function(nums) {
    const dp = new Array(nums.length).fill(nums[nums.length - 1]);
    for (let i = nums.length - 2; i >= 0; i--) {
        if (dp[i + 1] > 0) {
            dp[i] = dp[i + 1] + nums[i];
        } else {
            dp[i] = nums[i];
        }
    }
    return Math.max(...dp);
};
// console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));
// console.log(maxSubArray([-2,-1]));
console.log(maxSubArray([-1,-2]));
