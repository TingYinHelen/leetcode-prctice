/**
 * @param {number[]} nums
 * @return {number}
 */
// var removeDuplicates = function(nums) {
//   let num = null;
//   let index = 0;
//   while (index < nums.length) {
//     if (index > 0 && num === nums[index]) {
//       nums.splice(index, 1);
//     } else {
//       num = nums[index];
//       index++;
//     }
//   }
//   return nums.length;
// };

// var removeDuplicates = function(nums) {
//   if (nums.length == 0) return 0;
//   let i = 0;
//   for (let j = 1; j < nums.length; j++) {
//     if (nums[i] !== nums[j]) {
//       i++;
//       nums[i] = nums[j];
//     }
//   }
//   return i + 1;
// };

// const nums = [0,0,1,1,1,2,2,3,3,4];
const nums = [1,1,2];
var removeDuplicates = function(nums) {
  let len = 1;
  let temp = nums[0];
  for (let i = 0; i < nums.length; i++) {
    if (temp === nums[i]) {
      continue;
    } else {
      temp = nums[i];
      len++;
      nums[len - 1] = temp;
    }
  }
  return len;
};


console.log('result:', removeDuplicates(nums));