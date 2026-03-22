import { createApp } from 'vue' // 引入vue
import App from './App.vue' // 引入App.vue组件
import router from './router/index.js' // 引入路由模块

const app = createApp(App)
app.use(router)     // 挂载路由模块
app.mount('#app')   // 挂载App.vue组件到id为app的元素上
