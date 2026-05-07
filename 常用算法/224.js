/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
    const ops = [1]; // 栈，存储每层括号前的“符号因子”
    let sign = 1;    // 当前数字前的实际符号
    let ret = 0;     // 累加器
    const n = s.length;
    let i = 0;

    while (i < n) {
        if (s[i] === ' ') {       // 1. 跳过空格
            i++;
        } else if (s[i] === '+') { // 2. 遇到加号
            // 下一个数字的符号等于当前栈顶符号
            sign = ops[ops.length - 1];
            i++;
        } else if (s[i] === '-') { // 3. 遇到减号
            // 下一个数字的符号等于当前栈顶符号取反
            sign = -ops[ops.length - 1];
            i++;
        } else if (s[i] === '(') { // 4. 遇到左括号
            // 进入新层次，把当前的“符号因子”存起来
            ops.push(sign);
            i++;
        } else if (s[i] === ')') { // 5. 遇到右括号
            // 退出当前层次，恢复上一层的符号环境
            ops.pop();
            i++;
        } else {                   // 6. 遇到数字
            let num = 0;
            // 连续读取数字字符，处理多位数
            while (i < n && !isNaN(Number(s[i])) && s[i] !== ' ') {
                num = num * 10 + (s[i].charCodeAt() - '0'.charCodeAt());
                i++;
            }
            // 将【当前符号】乘上【这个数字】累加到结果
            ret += sign * num;
        }
    }
    return ret;
};

console.log(calculate("(1+(4+5+2)-3)+(6+8)"));

/**
 * 计算器：支持加减法和括号（如 "1-(2+3)"）
 * 核心思想：双栈求值（数字栈 + 操作符栈）
 * 遇到操作符时，先计算栈内优先级更高的表达式
 * 遇到右括号时，计算到对应的左括号为止
 */
var calculate = function (s) {
    // ----- 1. 辅助函数：移除所有空格 -----
    const removeSpaces = (str) => {
        return str.replace(/\s/g, '');
    };

    // ----- 2. 核心计算函数：从栈顶弹出一个操作符和两个数字，计算结果压回数字栈 -----
    const calc = (nums, ops) => {
        // 检查是否有足够的数字和操作符
        if (nums.length < 2 || ops.length === 0) return;

        const b = nums.pop();  // 右操作数（先弹出的）
        const a = nums.pop();  // 左操作数（后弹出的）
        const op = ops.pop();  // 操作符

        // 根据操作符计算结果
        if (op === '+') {
            nums.push(a + b);
        } else if (op === '-') {
            nums.push(a - b);
        }
        // 注：如需支持乘除，在这里添加 case 即可
    };

    // ----- 3. 预处理：移除所有空格 -----
    s = removeSpaces(s);

    // ----- 4. 初始化数据结构 -----
    const nums = [0];  // 数字栈，初始放入 0 是为了处理负数（如 "-1" 变成 "0-1"）
    const ops = [];    // 操作符栈，存放 '+' '-' '('

    const n = s.length;

    // ----- 5. 遍历每个字符 -----
    for (let i = 0; i < n; i++) {
        const c = s[i];

        if (c === '(') {
            // 左括号：直接入操作符栈
            ops.push(c);

        } else if (c === ')') {
            // 右括号：计算直到遇到左括号为止
            while (ops.length > 0) {
                const op = ops[ops.length - 1];
                if (op !== '(') {
                    // 不是左括号，就计算一次
                    calc(nums, ops);
                } else {
                    // 遇到左括号，弹出它并结束循环
                    ops.pop();
                    break;
                }
            }

        } else if (c === '+' || c === '-') {
            // ----- 处理操作符 -----
            // 特殊情况：处理负数（如 "-2" 或 "(-2+3)"）
            // 如果当前操作符前面是 '(' 或者位于开头，说明是负号，需要补 0
            if (i > 0 && (s[i - 1] === '(' || s[i - 1] === '+' || s[i - 1] === '-')) {
                nums.push(0);
            }

            // 新操作符入栈前，先把栈内可以计算的计算完（优先级高的先算）
            // 由于只有 + -，没有乘除，所以只要栈顶不是 '(' 就可以计算
            while (ops.length > 0 && ops[ops.length - 1] !== '(') {
                calc(nums, ops);
            }

            // 当前操作符入栈
            ops.push(c);

        } else if (c >= '0' && c <= '9') {
            // ----- 处理数字：读取连续的数字字符 -----
            let curNum = 0;
            let j = i;

            // 将连续的数字字符转换为数字
            while (j < n && s[j] >= '0' && s[j] <= '9') {
                curNum = curNum * 10 + (s[j].charCodeAt(0) - '0'.charCodeAt(0));
                j++;
            }

            // 数字入栈
            nums.push(curNum);

            // 更新外层循环索引（因为 j 已经指向数字的下一个位置）
            i = j - 1;
        }
    }

    // ----- 6. 处理剩余的操作符 -----
    while (ops.length > 0) {
        calc(nums, ops);
    }

    // ----- 7. 返回最终结果 -----
    return nums[nums.length - 1];
};

// 测试用例
console.log(calculate("1 + 1"));                    // 2
console.log(calculate(" 2-1 + 2 "));                // 3
console.log(calculate("(1+(4+5+2)-3)+(6+8)"));      // 23
console.log(calculate("1-( -2)"));                  // 3
console.log(calculate("-2+ 1"));                    // -1