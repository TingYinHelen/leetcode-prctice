// 方案一
var containsDuplicate1 = function(nums) {
  const obj = {}
  for (const i of nums) {
    if (obj[i] === 1) {
      return true
    } else {
      obj[i] = 1
    }
  }
  return false
};

var containsDuplicate2 = function (nums) {
  nums.sort((a,b)=>a-b)
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i+1]) {
      return true
    }
  }
  return false
}

var containsDuplicate3 = function (nums) {
  const set = new Set()
  for (const x of nums) {
    if (set.has(x)) {
      return true
    }
    set.add(x)
  }
  return false
}

console.log(containsDuplicate3([1,2,3,1]));