var singleNumber1 = function(nums) {
  nums.sort((a,b)=>a-b)

  for (let i = 0; i<nums.length; i++) {
    if (i%2 === 0 && nums[i] !== nums[i+1]) {
      return [nums[i]]
    }
  }
};
var singleNumber2 = function (nums) {
  const _nums = [];
  for (let i = 0; i < nums.length; i++) {
    const index = _nums.indexOf(nums[i])
    if (index > -1) {
      _nums.splice(index, 1)
    } else {
      _nums.push(nums[i])
    }
  }
  return _nums[0]
}

var singleNumber3 = function (nums) {
  let temp;
  for (const i of nums) {
    temp = i ^ temp
  }
  return temp
}
console.log(singleNumber3([4,1,2,1,2]));