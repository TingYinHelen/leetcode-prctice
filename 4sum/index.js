// const nums = [1, 0, -1, 0, -2, 2];

const nums = [-1,0,1,2,-1,-4];
// const nums = [0,0,0,0];
// const nums = [-3,-2,-1,0,0,1,2,3];
// const target = -1;



var fourSum = function(nums, target) {
    const result = [];

    nums.sort((a, b) => a - b);

    for (let index1 = 0; index1 < nums.length; index1++) {
        
        if (nums[index1] === nums[index1 - 1]) continue;

        const a = nums[index1];
        for (let index2 = index1 + 1; index2 < nums.length; index2++) {
            
            

            const b = nums[index2];
            let left = index2 + 1;
            let right = nums.length - 1;

            if (nums[index2] === nums[index2 - 1] && index2 > index1 + 1) {
                if (nums[index1] === nums[index2] && nums[left] === nums[right] && nums[index1] === nums[left] && nums[index1] === 0) {

                } else {
                    continue;
                }
            }

            while (left < right) {
                if (a + b + nums[left] + nums[right] === target) {
                    result.push([a, b, nums[left], nums[right]]);
                    
                    while (left < right && nums[left] === nums[left + 1]) {
                        left++;
                    }

                    while (left < right && nums[right] === nums[right - 1]) {
                        right--;
                    }
                    left++;
                    right--;
                } else if (a + b + nums[left] + nums[right] > target) {
                    right--;
                } else {
                    left++;
                }
            }
        }
    }
    return result;
};

console.log(fourSum(nums, target))