<template>
    <div class="person">
        <h2>姓名：{{ person.name }}</h2>
        <h2>年龄：{{ person.age }}</h2>
        <button @click="changeAge">改变年龄</button>
        <button @click="changeName">改变姓名</button>
    </div>
</template>

<script>    // export default 导出组件，但是不能和setup合并
    export default {
        name: 'Person', // 组件的名称，在模板中使用，不写默认就是文件名
    }
</script>


<script setup>  
    import { reactive,ref, toRefs } from 'vue'
    
    // 数据
    let person = reactive({
        name:'张三',
        age:18,
    })

    let {name,age} = person // 解构赋值，将person对象的属性赋值给name和age变量
    // 等价于let name = person.name,age = person.age，相当于把person对象的属性赋值给name和age变量
    // 本质上name和age是自己定义的变量，不会改变
    let {name:name1,age:age1} = toRefs(person) // toRefs将响应式reactive对象转换为ref对象
    // 可以通过name1.value和age1.value来访问ref对象的属性值

    // 方法
    function changeAge(){
        person.age += 1
        // age += 1 // 不能直接修改，会报错
        age1.value += 1 // 可以通过ref对象的value属性来修改属性值
        console.log(age1, age)
    }
    function changeName(){
        person.name += '1'
        // name += '1' // 不能直接修改，会报错
        name1.value += '1' // 可以通过ref对象的value属性来修改属性值
        console.log(name1, name)
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