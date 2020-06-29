const pushed = [1,2,3,4,5], popped = [4,3,5,2,1];

var validateStackSequences = function(pushed, popped) {
    const stack = [];
    let popIndex = 0;

    for (const val of pushed) {
        stack.push(val);

        while (stack.length !== 0 && stack[stack.length - 1] === popped[popIndex]) {
            stack.pop();
            popIndex++;
        }
    }

    return stack.length === 0;
};

console.log('result:', validateStackSequences(pushed, popped));