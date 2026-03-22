<template>
    <div class="person">
        <h2>当前求和：{{ sum }}</h2>
        <button @click="changeSum">点我求和</button>
        <h2>姓名：{{ person.name }}</h2>
        <h2>年龄：{{ person.age }}</h2>
        <button @click="changeAge">点我年龄+1</button>
        <button @click="changeName">点我姓名+1</button>
        <button @click="changePerson">修改个体</button>
        <h2>c：{{ obj.a.b.c }}</h2>
        <button @click="changeC">点我c+1</button>
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
    let sum = ref(0)
    let person = reactive({
        name:'张三',
        age:18,
    })
    let obj =reactive({
        a:{
            b:{
                c:100
            }
        }
    })

    // 方法
    function changeSum(){
        sum.value += 1
    }
    // 监听sum变化
    const stopWatch = watch(sum, (newValue, oldValue) => {
        console.log(newValue, oldValue)
        if(newValue >= 5){
            stopWatch()
        }
    })
    function changeAge(){
        person.age += 1
    }
    function changeName(){
        person.name += '1'
    }
    function changePerson(){
        // person = {
        //     name:'李四',
        //     age:20,
        // }
        Object.assign(person,{
            name:'李四',
            age:20,
        })  // assign方法本质上没有修改对象的地址，只是覆盖了属性值
    }
    // // 监听ref-person变化，监视的是ref的地址值，若想监视内部属性的变化，需要使用deep选项
    // watch(person, (newValue, oldValue) => {
    //     console.log(newValue, oldValue)
    // },{deep:true,immediate:true})
    // // 还可以添加immediate选项，使监听立即执行一次，oldValue为undefined
    // // 修改属性时，oldValue和newValue都是新的对象（对象内部属性相同）
    watch(person, (newValue, oldValue) => {
        console.log(newValue, oldValue)
    }) // 此时三个按钮都可以触发监听，默认开启深度监视
    function changeC(){
        obj.a.b.c += 1
    }
    // 监听obj.a.b.c变化，默认隐式地开启深度监视，且无法通过deep: false关闭(但是vue3.4+可以了)
    watch(obj, (newValue, oldValue) => {
        console.log(newValue, oldValue)
    },{deep:false})
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