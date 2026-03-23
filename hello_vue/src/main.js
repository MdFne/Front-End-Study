import { createApp } from 'vue'
import App from './App.vue'
import Hello from './Hello.vue'

// 创建应用
const app = createApp(App)

// 全局注册Hello组件
app.component('Hello', Hello)
// 全局注册一个属性x，所有组件都可以使用
app.config.globalProperties.x = 100

// 挂载应用
app.mount('#app')