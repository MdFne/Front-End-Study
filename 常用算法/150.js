/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    let stk = new Array();
    for (let token of tokens) {
        if (token === "+") {
            stk.push(stk.pop() + stk.pop());
        } else if (token === "-") {
            stk.push(-stk.pop() + stk.pop());
        } else if (token === "*") {
            stk.push(stk.pop() * stk.pop());
        } else if (token === "/") {
            let b = stk.pop();
            let a = stk.pop();
            let res = a / b;
            if (res < 0) {
                res = Math.ceil(res);
            } else {
                res = Math.floor(res);
            }
            stk.push(res);
        } else {
            stk.push(Number(token));
        }
        console.log(stk);
    }
    return stk[0];
};

console.log(evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]));


// --- 做法二：数组模拟栈（极致性能）---
// function evalRPN(tokens) {
//     // 关键点：预先分配一个固定大小的数组作为栈，长度根据公式计算
//     const stack = new Array((tokens.length + 1) / 2);
//     let idx = -1; // 栈顶指针，-1 表示空栈

//     for (const token of tokens) {
//         if ("+-*/".includes(token)) {
//             // 遇到运算符，取出栈顶的两项
//             const b = stack[idx--]; // 右操作数
//             const a = stack[idx--]; // 左操作数
//             switch (token) {
//                 case "+":
//                     stack[++idx] = a + b;
//                     break;
//                 case "-":
//                     stack[++idx] = a - b;
//                     break;
//                 case "*":
//                     stack[++idx] = a * b;
//                     break;
//                 case "/":
//                     stack[++idx] = parseInt(a / b, 10);
//                     break;
//             }
//         } else {
//             // 遇到数字，指针上移，存入栈中
//             stack[++idx] = parseInt(token, 10);
//         }
//     }
//     return stack[idx]; // 指针指向的位置就是最终结果
// }