<template>
    <div class="person">
        <!-- 模板里不用写.value -->
        <p>姓名：{{ name }}</p> 
        <p>年龄：{{ age }}</p>
        <button @click="showtel">显示电话</button>
        <button @click="changeAge">改变年龄</button>
        <button @click="changeName">改变姓名</button>
    </div>
</template>

<script>    // export default 导出组件，但是不能和setup合并
    export default {
        name: 'Person', // 组件的名称，在模板中使用，不写默认就是文件名
    }
</script>

<!-- setup语法糖 -->
<script setup>  // 必要时补充lang=“xx”
// 如果想写name之类的组件属性，要安装vite-plugin-vue-setup-extend插件
import { ref } from 'vue'
    let name = ref('张三')  // 会创建一个RefImpl对象，对象的value属性就是'张三'
    let age = ref(18)   // 要修改/访问ref对象的value属性，要写.value
    let tel = ref('13800000000')

    function showtel(){
        alert(tel.value)
    }
    function changeAge(){
        age.value++
    }
    function changeName(){
        name.value = '李四'
    }
</script>

<style scoped>
    .person {
        border: 1px solid #ccc;
        padding: 10px;
        margin: 10px;
    }
    button{
        margin: 5px;
    }
</style>