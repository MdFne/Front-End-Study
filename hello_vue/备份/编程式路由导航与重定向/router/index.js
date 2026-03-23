// 创建一个路由器实例并暴露

// 1. 引入vue-router
import { createRouter, createWebHistory } from 'vue-router'
// 2. 引入组件
import home from '@/pages/home.vue'
import about from '@/pages/about.vue'
import contact from '@/pages/contact.vue'
import news from '@/pages/news.vue'
import detail from '@/pages/detail.vue'

// 3. 创建路由器，路由器只需要创建一个，但是需要管理n个路由
const router = createRouter({
    history: createWebHistory(),    // 路由模式，hash模式和history模式
    routes: [   // 路由规则
        {
            name: 'zhuye',  // 路由命名
            path: '/home',
            component: home
        },
        {
            name: 'guanyu',
            path: '/about',
            component: about
        },
        {
            name: 'lianxi',
            path: '/contact',
            component: contact
        },
        {
            name: 'xinwen',
            path: '/news',
            component: news,
            children: [
                {
                    name: 'xiangqing',
                    path: 'detail/:id/:title/:content?', // params参数需要定义占位，?表示可选
                    component: detail,
                    // props: true // 第一种：开启props，将路由收到的所有params（也只能处理params）参数作为props传递给组件
                    // 相当于<detail id=?? title=?? content=??>

                    // // 第二种：函数写法，自己决定将什么作为props传递给组件
                    // props(route) {  // 接收一个route对象
                    //     return {
                    //         id: route.params.id,        // params传参写法
                    //         title: route.params.title,
                    //         content: route.params.content || '默认内容'
                    //     }
                    //     // 如果是query传参就写：return {route.query}
                    // }

                    // // 第三种：对象写法，只能处理params参数，不能处理query参数
                    // props: {
                    //     a: '123',
                    //     b: '456'
                    // }
                }
            ]
        },
        {
            path: '/',      // 重定向到/home
            redirect: '/home'
        }

    ]
})

export default router