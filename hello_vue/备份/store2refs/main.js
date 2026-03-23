import { createApp } from 'vue' // 引入vue
import App from './App.vue' // 引入App.vue组件
// 1. 引入pinia
import { createPinia } from 'pinia'

const app = createApp(App)
// 2. 创建pinia实例
const pinia = createPinia()
// 3. 挂载pinia实例到vue实例
app.use(pinia)
app.mount('#app')   // 挂载App.vue组件到id为app的元素上
