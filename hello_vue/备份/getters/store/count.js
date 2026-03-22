import { defineStore } from 'pinia' // 引入defineStore函数

// defineStore(id值（与文件名一致即可），配置对象)
export const useCountStore = defineStore('count', {
    // state必须是一个函数，返回一个对象，是真正存储数据的地方
    state() {
        return {
            count: 0
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