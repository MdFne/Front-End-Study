import { defineStore } from 'pinia' // 引入defineStore函数
import axios from 'axios'

// defineStore(id值（与文件名一致即可），配置对象)
export const useTalkStore = defineStore('lovetalk', {
    // state必须是一个函数，返回一个对象，是真正存储数据的地方
    state() {
        return {
            talklist: [
                { id: 1, content: '你好，我是Alice' },
                { id: 2, content: '你好，我是Bob' },
                { id: 3, content: '你好，我是Charlie' },
            ]
        }
    },
    actions: {
        async getTalk() {// 发请求
            // 也可以写 let {data:content} = await axios.get('https://api.zxki.cn/api/twqh')
            let res = await axios.get('https://api.zxki.cn/api/twqh')
            console.log(res)
            // 包装成对象
            this.talklist.unshift({
                id: this.talklist.length + 1,
                content: res.data
            })
        }
    }
})