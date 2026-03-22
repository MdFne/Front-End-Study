import { ref } from 'vue'
// 通过hooks可以实现模块化，每个hooks都是一个独立的功能模块，互不干扰，类似于v2的mixin
// 每个hooks都有自己的作用域，不会影响其他hooks的运行

export default function () {// 定义响应式数据
    let sum = ref(0)

    // 定义方法
    function add() {
        sum.value += 1
    }
    // 向外部提供东西(变量和方法)
    return { sum, add }
}