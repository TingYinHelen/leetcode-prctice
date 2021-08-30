var missingNumber = function(nums) {
    nums.push('x')
    for(let i = 0 ; i < nums.length ; i++){
        if(nums[i]!== i)
        return i
    }
}
console.log('[ missingNumber ]', missingNumber([0]))
