// var combinationSum = function(candidates, target) {
//     candidates = candidates.sort((a, b) => a - b);
//     const result = [];

//     for (let index1 = 0; index1 < candidates.length; index1++) {
//         let sum = candidates[index1];
//         const sumArr = [candidates[index1]];

//         if (sum === target) {
//             result.push(sumArr);
//             break;
//         }

//         for (let index2 = 0; index2 < candidates.length; index2++) {
//             if (sum <= target) {
//                 sum = sum + candidates[index2];
//                 sumArr.push([candidates[index2]])
//             }
//             if (sum === target) {
//                 result.push(sumArr);
//             }
//         }
//     }

    
//     return result;
// } 

// var combinationSum = function(candidates, target) {
//     let n = candidates.length;
//     let res = [];
//     let tmpPath = [];
//     candidates = candidates.sort((a,b) => {return a - b})
//     let backtrack = (tmpPath,target,start) => {
//         if(target == 0){
//             res.push(tmpPath);
//             return;
//         }
//         for(let i = start;i < n;i++){
//             if(target < candidates[i]) break;
//             tmpPath.push(candidates[i]);
//             backtrack(tmpPath.slice(),target - candidates[i],i);
//             tmpPath.pop();
//         }
//     }
//     backtrack(tmpPath,target,0);
//     return res;
// };

var combinationSum = function(candidates, target) {
    const result = [];
    let tmpPath = [];
    let start = 0;

    candidates = candidates.sort((a, b) => a - b);

    function backtrack(tmpPath, target, start) {
        if (target === 0) {
            result.push(tmpPath);
            return; 
        }

        if (target < 0) {
            return;
        };

        for (let index = start; index < candidates.length; index++) {
            tmpPath.push(candidates[index]);

            backtrack(tmpPath.slice(), target - candidates[index], index);
            
            tmpPath.pop();
        }
    }

    backtrack(tmpPath, target, start);

    return result;
}

const candidates = [2,3,5];
const target = 8;

console.log('result:', combinationSum(candidates, target));