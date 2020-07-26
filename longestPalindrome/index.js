// /**
//  * @param {string} s
//  * @return {string}
//  */
// var longestPalindrome = function(s) {
//   if (!s) return s;
  
//   let longest = s[0];
//   let index = 0;

//   while(index < s.length) {
//     let itemLongest = s[index];
//     let i = 1;

//     while (s[index] === s[index + 1]) {
//       itemLongest = `${itemLongest}${s[index + 1]}`;
//       if (itemLongest.length > longest.length) {
//         longest = itemLongest;
//       }
//       index++;
//     }

//     const _len = itemLongest.length;

//     while (s[index - i - (_len - 1)] === s[index + i] && index - i - (_len - 1) >= 0) {
//       itemLongest = `${s[index - i - (_len - 1)]}${itemLongest}${s[index + i]}`;
//       if (itemLongest.length > longest.length) {
//         longest = itemLongest;
//       }
//       i++;
//     }
    
//     index++;
//   }
//   return longest;
// };


// console.log('result:', longestPalindrome('bb'));



/**
 * @param {string} s
 * @return {string}
 */

var longestPalindrome = function (s) {
  function getReverseStr(str) {
      return str.split('').reverse().join('');
  }

  function findPalindromicSubString(str, reverseStr, width) {
      if (str.length < width) {
          return '';
      }
      return str.slice(0, width) === reverseStr.slice(reverseStr.length - width)
          ? str.slice(0, width)
          : findPalindromicSubString(str.slice(1), reverseStr.slice(0, reverseStr.length - 1), width);
  }

  const reverseStr = getReverseStr(s);
  let width = s.length;
  let result = '';

  while (width > 0) {                  // 从最长的开始找
      result = findPalindromicSubString(s, reverseStr, width);
      if (result.length > 1) {         // 如果找到了就退出
          break;
      }
      width--;
  }

  return result;
};
console.log('result:', longestPalindrome("babad"));
