// 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那两个整数，并返回他们的数组下标。

//给定 nums = [2, 7, 11, 15], target = 9
//因为 nums[0] + nums[1] = 2 + 7 = 9
//所以返回 [0, 1]

const nums = [2, 7, 11, 15];
const target = 9;

function twoSum(nums, target) {
    for (let index1 = 0; index1 < nums.length; index1++) {
        for (let index2 = 0; index2 < nums.length; index2++) {
            if (index1 !== index2 && nums[index1] + nums[index2] === target) {
                return [index1, index2];
            }
        }
    }
    return [];
}

console.log('towSum:', twoSum(nums, target));


