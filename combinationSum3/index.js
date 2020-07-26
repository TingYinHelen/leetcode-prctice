/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
  const result = [];
  const elements = [1,2,3,4,5,6,7,8,9];

  function sum(arr) {
    if (arr.length > 0) {
      return arr.reduce((prev, curr) => prev + curr) 
    } else {
      return 0;
    }
  }

  function backtrack (path, start) {
    if (sum(path) === n && path.length === k) {
      result.push([...path]);
    }

    for (let index = start; index < elements.length; index++) {
      // 选择
      if (sum(path) > n || path.length > k) {
        continue;
      }
      
      path.push(elements[index]);

      backtrack(path, index + 1);
      // 取消选择
      path.pop();
    }
  }

  backtrack([], 0);
  return result;
};

console.log('result------', combinationSum3(3, 9));