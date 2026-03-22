<template>
    <div class="person">
        <h2>当前求和为{{sum}}</h2>
        <button @click="add">点我求和</button>
        <hr>
        <img v-for="(item, index) in doglist" :src="item" alt="" :key="index">
        <button @click="getDog">获取随机狗图</button>
    </div>
</template>

<script>    // export default 导出组件，但是不能和setup合并
    export default {
        name: 'Person', // 组件的名称，在模板中使用，不写默认就是文件名
    }
</script>

<script setup>  
    // 通过hooks可以实现模块化，每个hooks都是一个独立的功能模块，互不干扰，类似于v2的mixin
    // 每个hooks都有自己的作用域，不会影响其他hooks的运行
    import useSum from '../hooks/useSum.js'
    import useDogs from '../hooks/useDogs.js'

    
    let { doglist, getDog } = useDogs()
    let { sum, add } = useSum()
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
    img {
        height: 200px;
        margin: 5px;
    }
</style>