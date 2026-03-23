<template>
    <div class="person">
        <p>需求：水温大于等于60度或水位大于等于100cm，给服务发送请求</p>
        <h2>当前水温：{{ temp }} ℃</h2>
        <h2>当前水位：{{ water }} cm</h2>
        <button @click="changetemp">点我水温+1</button>
        <button @click="changewater">点我水位+1</button>
    </div>
</template>

<script>    // export default 导出组件，但是不能和setup合并
    export default {
        name: 'Person', // 组件的名称，在模板中使用，不写默认就是文件名
    }
</script>


<script setup>  
    import { ref, watchEffect, watch } from 'vue'

    let temp = ref(0)
    function changetemp(){
        temp.value += 10
    }
    let water = ref(0)
    function changewater(){
        water.value += 10
    }

    // watch([temp, water], (newV)=>{
    //     let [newTemp, newWater] = newV
    //     if(newTemp >= 60 || newWater >= 100){
    //         console.log('给服务发送请求')
    //     }
    // })  // 如果监视数据过多，数组会很长，影响代码可读性

    // watchEffect 会自动监听所有响应式数据，当数据变化时，会自动执行回调函数
    // 可以在回调函数中使用所有响应式数据
    watchEffect(()=>{
        console.log(temp.value, water.value)    // 上来就会监视一次
        if(temp.value >= 60 || water.value >= 100){
            console.log('给服务发送请求')
        }
    })
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