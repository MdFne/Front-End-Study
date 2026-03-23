<template>
    <div class="person">
        <h2>一辆{{ car.brand }}车，价格{{ car.price }}</h2>
        <button @click="changePrice">改变价格</button>
        <br>
        <h2>游戏列表</h2>
        <ul>
            <!-- v-for遍历数组,game是数组元素 -->
            <li v-for="game in games" :key="game.name">
                {{ game.name }}，价格{{ game.price }}
            </li>
        </ul>
        <button @click="changeGamePrice">改变游戏价格</button>
    </div>
</template>

<script>    // export default 导出组件，但是不能和setup合并
    export default {
        name: 'Person', // 组件的名称，在模板中使用，不写默认就是文件名
    }
</script>


<script setup>  
    import { reactive } from 'vue'
    // 数据
    let car = reactive({brand:'奔驰',price:1000000})    
    // reactive创建一个proxy对象，target是{brand:'奔驰',price:1000000}
    let games = reactive([
        {name:'游戏1',price:100},
        {name:'游戏2',price:200},
        {name:'游戏3',price:300},
    ])

    // 方法
    function changePrice(){
        console.log(car)
        car.price += 800
    }
    function changeGamePrice(){
        games[0].price += 800
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