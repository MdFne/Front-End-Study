function currying(fn) {
    return function curried(...args) {
        // 如果传的参数够了，就直接执行
        if (args.length >= fn.length) {
            return fn.apply(this, args)
        }
        // 不够，就继续返回函数，接收剩下的参数
        return function (...nextArgs) {
            return curried(...args, ...nextArgs)
        }
    }
}

function add(a, b, c) {
    return a + b + c
}

const curriedAdd = currying(add)

console.log(curriedAdd(1, 2)(3))  // 6
console.log(curriedAdd(1)(2, 3))  // 6
console.log(curriedAdd(1)(2)(3)) // console.log(6)