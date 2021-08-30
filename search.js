// var search = function(nums, target) {
//     let count = 0;
//     for (const num of nums) {
//         if (target === num) {
//             count++
//         }
//     }
//     return count;
// };
var search = function(nums, target) {
    let i = 0, 
    j = nums.length - 1, 
    m = Math.floor((j - i) / 2);
    while (nums[m] !== target) {
        if (nums[m] < target) {
            i = m
        } 
        if (nums[m] > target) {
            j = m
        }
        m = Math.floor((j - i) / 2);
    }
    console.log('i====', i)
    console.log('j====', j)
    console.log('m====', m)
}

const nums = [5,8,8,9,10], target = 8
console.log('[ search(nums, target) ]', search(nums, target));