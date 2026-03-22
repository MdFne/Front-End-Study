<template>
    <div class="count">
        <h2>当前计数: {{ count }}</h2>
        <h2>当前计数的10倍: {{ bigSum }}</h2>
        
        <!-- 用户输入默认字符串，需要转换为数字类型，
            可以value前面加冒号，或者v-model后面加.number -->
        <select v-model="step">
            <option value="1">1</option>    
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="add">增加</button>
        <button @click="sub">减少</button>
    </div>
</template>

<script setup name="Count">
    import { ref, toRefs } from 'vue'
    import { useCountStore } from '@/store/count' // 引入count模块的store
    import { storeToRefs } from 'pinia'


    let test = ref({
        count: 0,
        bigSum: 0
    })
    console.log(test.value)
    test.value.bigSum = 10
    console.log(test.value)
    
    let countStore = useCountStore() // 创建count模块的store实例
    // let { count } = toRefs(countStore) // 不建议使用torefs，包裹内容太多
    let { count, bigSum } = storeToRefs(countStore) // 建议使用storeTorefs，只包裹refs数据，不关心方法
    console.log(count.value) // reactive定义的对象，响应式；包含一个Ref类型的count属性
    // 也可以countStore.$state.count来访问

    // mutate是一个对象，包含type和payload属性
    // type是字符串，payload是一个对象，包含修改前和修改后的属性值
    // state是当前最新的state对象
    countStore.$subscribe((mutate, state)=> {
        console.log('数据发生变化', countStore.$state.count)
        console.log('变化类型:', mutate.type)
        console.log('变化详情:', mutate.events)
        console.log('当前状态:', state)
        // localstorage只能存储字符串，所以需要转换为字符串
        localStorage.setItem('count', JSON.stringify(countStore.$state.count))
    })

    // 注意点：如果是自己的外层定义的ref数据需要通过.value来访问
    // 但是reactive定义的对象中包含的属性都是Ref类型的，直接访问即可，不用.value

    const step = ref(1)
    function add() {
        // 1. 直接修改数据
        // countStore.count += Number(step.value)
        // 2. 批量修改数据
        // countStore.$patch({
        //     count: countStore.count + Number(step.value)
        //     // 其他属性也可以批量修改
        // })
        // 3. 调用action修改数据
        countStore.add(Number(step.value))
    }
    function sub() {
        countStore.count -= Number(step.value)
    }
</script>

<style scoped>
    .count {
        background-color: lightblue;
        padding: 10px;
        border-radius: 5px;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
    }
    select {
        width: 65px;
        height: 40px;
        padding: 5px;
        border-radius: 5px;
        border: 1px solid #ccc;
        vertical-align: middle;
    }
    button {
        width: 65px;
        height: 40px;
        padding: 5px;
        border-radius: 5px;
        border: 1px solid #ccc;
        background-color: #fff;
        cursor: pointer;
        vertical-align: middle;
    }

</style>
