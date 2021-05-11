var findRepeatNumber1 = function (nums) {
  const obj = {}  
  for (const i of nums) {
    if (!obj[i]) {
      obj[i] = true
    } else {
      return i
    }
  }
}

var findRepeatNumber2 = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    if (i === nums[i]) {
      continue
    } else {
      let temp = nums[nums[i]]
      if (temp === nums[i]) {
        return temp
      }
      nums[nums[i]] = nums[i]
      nums[i] = temp
    }
  }
}

console.log(findRepeatNumber2([2, 3, 1, 0, 2, 5, 3])); // 2或者3
// hashmap和bitmap，字典
