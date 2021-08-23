/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.stack = [];
    this._top = null;
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.stack.push(x);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.min = function() {
    return Math.min(...this.stack);
};


const stack = new MinStack();
stack.push(-2);
stack.push(0);
stack.push(-3);
console.log('[ stack.min() ]', stack.min());
stack.pop()
console.log('[ stack.top() ]', stack.top());
console.log('[ stack.min() ]', stack.min())