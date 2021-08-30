// var findRepeatNumber1 = function (nums) {
//   const obj = {}  
//   for (const i of nums) {
//     if (!obj[i]) {
//       obj[i] = true
//     } else {
//       return i
//     }
//   }
// }

// var findRepeatNumber2 = function (nums) {
//   for (let i = 0; i < nums.length; i++) {
//     if (i === nums[i]) {
//       continue
//     } else {
//       let temp = nums[nums[i]]
//       if (temp === nums[i]) {
//         return temp
//       }
//       nums[nums[i]] = nums[i]
//       nums[i] = temp
//     }
//   }
// }

// var findRepeatNumber = function(nums) {
//   const map = new Map();
//   let repeatNum = -1;
//   for (const num of nums) {
//     if (map.get(num) > -1) {
//       repeatNum = num;
//       break;
//     } else {
//       map.set(num, num);
//     }
//   }
//   return repeatNum;
// };
var findRepeatNumber = function(nums) {
  let i = 0
  while (i < nums.length) {
    if (i === nums[i]) {
      i++
    } else {
      if (nums[i] === nums[nums[i]]) {
        return nums[i]
      } else {
        let tmp = nums[nums[i]]
        nums[nums[i]] = nums[i]
        nums[i] = tmp
      }
    }
  }
}

console.log(findRepeatNumber(
  [3, 4, 2, 0, 0, 1])); // 2或者3
// hashmap和bitmap，字典
