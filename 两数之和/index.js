const num = [2, 7, 11, 15];
const target = 9;

function test1(num, target) {
    for (const index in num) {
        for (const _index in num) {
            if (index !== _index && num[index] + num[_index] === target) {
                return [index, _index];
            }
        }
    }
}

function test2(nums, target) {
    const numsMap = {};
    for (const index in nums) {
        numsMap[nums[index]] = index;
    }
    for (const index in nums) {
        const complement = target - nums[index];
        if (numsMap[complement] && numsMap[complement] !== index) {
            return [index, numsMap[complement]];
        }
    }
}

function test3(nums, target) {
    const numsMap = {};
    for (const index in nums) {
        const complement = target - nums[index];
        if (numsMap[complement]) {
            return [ index, numsMap[complement]];
        }
        numsMap[nums[index]] = index;
    }
}

console.log(test3(num, target));
