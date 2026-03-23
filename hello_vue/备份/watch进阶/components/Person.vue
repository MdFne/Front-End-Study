<template>
    <div class="person">
        <h2>姓名：{{ person.name }}</h2>
        <h2>年龄：{{ person.age }}</h2>
        <h2>车名：{{ person.car.name }}</h2>
        <h2>车价：{{ person.car.price }}</h2>
        <button @click="changeName">修改名字</button>
        <button @click="changeAge">改变年龄</button>
        <button @click="changeCarPrice">改变车价</button>
        <button @click="changeCarName">改变车名</button>
        <button @click="changeCar">修改整个车</button>
    </div>
</template>

<script>    // export default 导出组件，但是不能和setup合并
    export default {
        name: 'Person', // 组件的名称，在模板中使用，不写默认就是文件名
    }
</script>


<script setup>  
    import { ref, reactive, watch } from 'vue'

    // 数据
    let person = reactive({
        name:'张三',
        age:18,
        car: {
            name:'奔驰',
            price:1000000,
        }
    })
    
    // 方法
    function changeAge(){
        person.age += 1
    }
    function changeName(){
        person.name += '1'
    }
    function changeCarPrice(){
        person.car.price += 100000
    }
    function changeCarName(){
        person.car.name += '1'
    }
    function changeCar(){
        person.car = {
            name:'宝马',
            price:2000000,
        }
    }
    
    // 监听
    // 监听age属性（不是对象类型）变化，需要加工为一个getter函数（能返回一个的函数，通常是()=>{return xxx}）
    watch(()=>person.age, (newAge,oldAge)=>{  
        console.log('年龄变化了',newAge,oldAge)
    })
    // 监听car属性（对象类型）变化，可以直接写属性
    // 但是直接写属性替换不能直接监听对象属性的变化（changeCar）
    // 开启深度也没有用，深度本质上是监视地址的同时监视细枝末的属性值
    watch(person.car, (newCar,oldCar)=>{
        console.log('车变化了',newCar,oldCar)
    })

    // 此时监听的变为地址值，细枝末节不再关心
    watch(()=>person.car, (newCar,oldCar)=>{
        console.log('车整个变化了',newCar,oldCar)
    })

    // 推荐用函数+深度监听
    watch(()=>person.car, (newCar,oldCar)=>{
        console.log('深度监听',newCar,oldCar)
    },{deep:true})

    // 同时监视多个属性，将多个属性的getter函数放到数组中
    watch([()=>person.name, ()=>person.car.name], (newVal,oldVal)=>{
        console.log('姓名或车名变化了',newVal,oldVal)
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