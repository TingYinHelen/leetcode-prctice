/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  if (!s) return s;
  let longest = s[0];
  let index = 0;

  while(index < s.length) {
    let itemLongest = s[index];
    let i = 1;
    while (s[index] === s[index + 1]) {
      itemLongest = `${itemLongest}${s[index + 1]}`;
      if (itemLongest.length > longest.length) {
        longest = itemLongest;
      }
      index++;
    }

    const _len = itemLongest.length;

    while (s[index - i - (_len - 1)] === s[index + i] && index - i - (_len - 1) >= 0) {
      itemLongest = `${s[index - i - (_len - 1)]}${itemLongest}${s[index + i]}`;
      if (itemLongest.length > longest.length) {
        longest = itemLongest;
      }
      i++;
    }
    
    index++;
  }
  return longest;
};

// console.log('result:', longestPalindrome('bb'));
console.log('result:', longestPalindrome("abcba"));
