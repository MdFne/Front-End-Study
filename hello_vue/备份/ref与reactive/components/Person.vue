<template>
    <div class="person">
        <h2>一辆{{ car.brand }}车，价格{{ car.price }}</h2>
        <button @click="changePrice">改变价格</button>
        <br>
        <h2>当前和为{{ sum }}</h2>
        <button @click="changeSum">累加</button>
    </div>
</template>

<script>    // export default 导出组件，但是不能和setup合并
    export default {
        name: 'Person', // 组件的名称，在模板中使用，不写默认就是文件名
    }
</script>


<script setup>  
    import { reactive,ref } from 'vue'
    // 数据
    let car = reactive({brand:'奔驰',price:1000000})    
    // reactive创建一个proxy对象，target是{brand:'奔驰',price:1000000}
    // ref也可以创建响应式数据，但是需要.value来访问
    let sum = ref(0)
    // 方法
    // function changePrice(){
    //     console.log(car)
    //     car.price += 800
    // }
    function changePrice(){
        car.price += 800
        // car = {brand:'奔驰',price:1000000}   // 不能直接赋值，会报错
        // car = reactive({ xxx })      // 也不行
        // Object.assign(obj1,obj2)     // 可以将obj2的属性拷贝到obj1中
        // Object.assign(car,newCar)    // 这种写法可以将newCar的属性拷贝到car中，保持响应式
    }
    function changeSum(){
        sum.value += 1
        // sum = ref(9) // 不能越过value，直接赋值会报错
    }
    // function changeGamePrice(){
    //     games[0].price += 800
    // }

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