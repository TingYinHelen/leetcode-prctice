/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  const result = [];
  const lettersArr = [
    null,
    'abc',
    'def',
    'ghi',
    'jkl',
    'mno',
    'pqrs',
    'tuv',
    'wxyz',
  ];

  function combination (index, str) {
    if (index === digits.length) {
      result.push(str);
      return;
    }
    for (const letter of lettersArr[digits[index] - 1]) {
      combination(index+1, `${str}${letter}`)
    }
  }

  combination(0, '');

  return result;
};

console.log('result:', letterCombinations('2'));