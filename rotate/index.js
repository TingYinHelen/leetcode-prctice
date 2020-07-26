/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  let _nums = nums.splice(-k - 1, k + 1);
  
  // console.log('_nums----', _nums);
  // console.log('nums----', nums);
  // console.log('result----', [..._nums, ...nums]);
  return _nums.concat(nums);
};

console.log('result:', rotate([1,2,3,4,5,6,7], 3));