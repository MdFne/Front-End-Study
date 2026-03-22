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
                    path: 'detail', // 子集不用/，会自动拼接
                    component: detail
                }
            ]
        },

    ]
})

export default router