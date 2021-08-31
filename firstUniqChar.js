var firstUniqChar = function(s) {
    const dic = {};
    const queue = [];
    for (let i = 0; i < s.length; i++) {
        if (!dic[s[i]]) {
            queue.push(s[i])
            dic[s[i]] = 1
        } else {
            dic[s[i]] += 1;
        }
    }
    while (queue.length > 0) {
        const tmp = queue.shift();
        if (dic[tmp] === 1) {
            return tmp;
        }
    }
    return ' ';
};

s = "";
console.log(firstUniqChar(s));
