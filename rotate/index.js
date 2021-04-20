/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// var rotate = function(nums, k) {
//   let _nums = nums.splice(-k - 1, k + 1);
  
//   // console.log('_nums----', _nums);
//   // console.log('nums----', nums);
//   // console.log('result----', [..._nums, ...nums]);
//   return _nums.concat(nums);
// };

// console.log('result:', rotate([1,2,3,4,5,6,7], 3));
let reverse = function (nums, start, end) {
  while(start < end) {
    [nums[start++], nums[end--]] = [nums[end], nums[start]]
  }
}
var rotate = function(nums, k) {
  k = k % nums.length;
  console.log('k: ', k);
  reverse(nums, 0, nums.length - 1)
  reverse(nums, 0, k-1)
  reverse(nums, k, nums.length - 1)
  console.log(nums);
}
rotate([-1], 2)


// for (let i = 0; i < k; i++) {
//   let a = nums.pop()
//   nums.unshift(a)
// }
// return nums