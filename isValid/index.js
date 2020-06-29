var isValid = function(s) {
    const mapping = {
        '(': ')',
        '{': '}',
        '[': ']',
    };
    
    const stack = [];
    
    for (const str of s) {
        if (mapping[str]) {
            stack.push(mapping[str]);
        } else if (str === stack[stack.length - 1]) {
            stack.pop();
        } else {
            stack.push(s);
        }
    }

    return stack.length === 0;
};

console.log('result:', isValid('()'));