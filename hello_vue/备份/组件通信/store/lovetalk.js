import { defineStore } from 'pinia' // 引入defineStore函数
import axios from 'axios'

// 1. 选项式写法
// // defineStore(id值（与文件名一致即可），配置对象)
// export const useTalkStore = defineStore('lovetalk', {
//     // state必须是一个函数，返回一个对象，是真正存储数据的地方
//     state() {
//         return {
//             talklist: [
//                 { id: 1, content: '你好，我是Alice' },
//                 { id: 2, content: '你好，我是Bob' },
//                 { id: 3, content: '你好，我是Charlie' },
//             ]
//         }
//     },
//     actions: {
//         async getTalk() {// 发请求
//             // 也可以写 let {data:content} = await axios.get('https://api.zxki.cn/api/twqh')
//             let res = await axios.get('https://api.zxki.cn/api/twqh')
//             console.log(res)
//             // 包装成对象
//             this.talklist.unshift({
//                 id: this.talklist.length + 1,
//                 content: res.data
//             })
//         }
//     }
// })

import { reactive } from 'vue'
// 2. 组合式写法
export const useTalkStore = defineStore('lovetalk', () => {   // 写函数而不是对象

    // talklist相当于state
    const talklist = reactive([
        { id: 1, content: '你好，我是Alice' },
        { id: 2, content: '你好，我是Bob' },
        { id: 3, content: '你好，我是Charlie' },
    ]
    )

    // getTalk函数相当于action
    async function getTalk() {
        // 也可以写 let {data:content} = await axios.get('https://api.zxki.cn/api/twqh')
        let res = await axios.get('https://api.zxki.cn/api/twqh')
        console.log(res)
        // 包装成对象
        talklist.unshift({
            id: talklist.length + 1,
            content: res.data
        })
    }

    // 返回talklist和getTalk函数
    // 这两个函数可以在组件中调用
    // 组件中调用时，需要先引入useTalkStore函数
    return {
        talklist,
        getTalk
    }
})