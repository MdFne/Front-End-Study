import { defineStore } from 'pinia' // 引入defineStore函数

// defineStore(id值（与文件名一致即可），配置对象)
export const useCountStore = defineStore('count', {
    // state必须是一个函数，返回一个对象，是真正存储数据的地方
    state() {
        return {
            count: localStorage.getItem(Number('count')) || 0   // 如果localstorage中没有count，默认值为0
            // 如果取出的是字符串，需要转换为json对象，使用JSON.parse()
            // 如果存进去是json对象，需要转换为字符串，使用JSON.stringify()
        }
    },
    // actions定义的方法可以直接修改state中的数据，用于响应组件的事件
    // action可以封装一些业务逻辑，例如：异步操作、多个state属性的修改等
    actions: {
        add(num) {
            this.count += num   // 要访问state必须使用this关键词，this指向当前实例countStore
        }
    },
    getters: {
        bigSum(state) {
            console.log(this); // 指向当前实例countStore
            return state.count * 10
            // return this.count * 10  // 也可以使用this访问state
            // 不用this的话可以写成箭头函数
        }
    }
})