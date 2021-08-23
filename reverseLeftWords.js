var reverseLeftWords = function(s, n) {
    let tmp = s.slice(0, n);
    s = s.slice(n);
    return `${s}${tmp}`;
};
console.log('result====', reverseLeftWords('abcdefg', 2));