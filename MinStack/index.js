/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.stack = [];
    this.helpStack = [];
    this.length = 0;
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    const len = this.length;
    this.stack[len] = x;
    if (len === 0 || x < this.helpStack[len - 1]) {
        this.helpStack[len] = x;
    } else {
        this.helpStack[len] = this.helpStack[len - 1];
    }
    this.length = len + 1;
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    const len = this.length;
    this.length = len - 1;
    return this.stack[len - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.helpStack[this.length - 1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

const minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log('getMin:', minStack.getMin());   // 返回 -3.
minStack.pop();
console.log('top:', minStack.top());      // 返回 0
console.log('getMin:', minStack.getMin());    // 返回 -2
