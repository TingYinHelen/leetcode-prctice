// var isValid = function(s) {
//     const mapping = {
//         '(': ')',
//         '{': '}',
//         '[': ']',
//     };
    
//     const stack = [];
    
//     for (const str of s) {
//         if (mapping[str]) {
//             stack.push(mapping[str]);
//         } else if (str === stack[stack.length - 1]) {
//             stack.pop();
//         } else {
//             stack.push(s);
//         }
//     }

//     return stack.length === 0;
// };

// console.log('result:', isValid('()'));

var isValid = function(s) {
    const map = {
        '(': ')',
        '[': ']',
        '{': '}'
    };
    const stack = [];
    for (const key of s) {
        if (map[key]) {
            stack.push(key);
        } else if (key === map[stack[stack.length - 1]]) {
            stack.pop();
        } else {
            stack.push(key);
        }
    }
    return stack.length === 0;
};

console.log('result:', isValid('([)]'));