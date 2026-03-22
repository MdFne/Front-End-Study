<template>
    <div class="person">
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
    let name = '张三'
    let age = 18
    let tel = '13800000000'
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