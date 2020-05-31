const num = [2, 7, 11, 15];
const target = 9;

function twoSum1(nums, target) {
    // for (const index in num) {
    //     for (const _index in num) {
    //         if (index !== _index && num[index] + num[_index] === target) {
    //             return [index, _index];
    //         }
    //     }
    // }
    return result;
}

function twoSum2(nums, target) {
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

function twoSum3(nums, target) {
    const numsMap = {};
    for (const index in nums) {
        const complement = target - nums[index];
        if (numsMap[complement]) {
            return [ index, numsMap[complement]];
        }
        numsMap[nums[index]] = index;
    }
}

function twoSum4(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
    return [];
}

function twoSum5(nums, target) {
    const map = new Map();
    for (let index = 0; index < nums.length; index++) {
        const complement = target - nums[index];
        if (map.get(complement) !== undefined) {
            return [index, map.get(complement)];
        }
        map.set(nums[index], index);
    }
    return [];
}

function towSum5(nums, target) {
    const Map = nums.reduce((acc, num, index) => {
        acc[num] = index;
        return acc;
    });
    for (let i = 0; i < nums.length; i++) {
        const other = Map[nums[i]];
        if (other !== undefined && other !== i) {
            return [i, other];
        }
    }
}

console.log(twoSum5(num, target));
