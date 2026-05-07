
var MinStack = function () {
    this.value_stk = new Array();
    this.min_stk = new Array();
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
    this.value_stk.push(val);
    if (this.min_stk.length === 0) {
        this.min_stk.push(val);
        return;
    }

    this.min_stk.push(Math.min(this.min_stk[this.min_stk.length - 1], val));
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    this.value_stk.pop();
    this.min_stk.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    return this.value_stk[this.value_stk.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    return this.min_stk[this.min_stk.length - 1];
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */