// 思路：
// 栈无法实现队列功能：栈底元素无法直接删除，需要将所有元素出栈
// 双栈可以实现列表倒序，设有含三个元素的栈A=[1,2,3]和空B=[]。若循环执行A元素出栈
// 并添加入栈B，知道栈A为空，则A=[], B=[3,2,1]，即栈B元素实现栈A元素倒叙
// 利用栈B删除对首元素：倒叙后，B执行出栈则想到与删除了A的占地元素，即对应队首元素

// 函数实现，我们可以设计栈A用于加入操作


var CQueue = function() {
    this.stack = []
    this.stack_bak = []
};

/** 
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function(value) {
this.stack.push(value)
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function() {
    console.log('----', this.stack)
    if (this.stack_bak.length > 0) {
        return this.stack_bak.pop()
    }
    if (this.stack_bak.length === 0 && this.stack.length === 0) {
        return -1
    }
    if (this.stack_bak.length === 0 && this.stack.length > 0) {
        for (let i = this.stack.length - 1; i >=0; i--) {
            this.stack_bak.push(this.stack[i])
        }
        const num = this.stack_bak.pop()
        
        
        return this.stack_bak.pop()
    }

    return this.stack_bak.pop()
};

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */

