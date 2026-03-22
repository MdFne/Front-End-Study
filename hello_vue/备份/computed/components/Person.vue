<template>
    <div class="person">
        <!-- v-bind:value="firstName"单向绑定，只能从数据流向页面 -->
        姓：<input type="text" v-model="firstName"> <br>
        <!-- v-model:value="lastName"双向绑定，既能从数据流向页面，也能从页面流向数据 -->
        名：<input type="text" v-model="lastName">
        <p>姓名：{{ fullname }}</p>
    </div>
</template>

<script>    // export default 导出组件，但是不能和setup合并
    export default {
        name: 'Person', // 组件的名称，在模板中使用，不写默认就是文件名
    }
</script>


<script setup>  
    import { ref, computed } from 'vue'

    // 数据
    let firstName = ref('zhang')
    let lastName = ref('san')
    // 计算属性
    let fullname = computed(()=>{
        // 计算属性的getter函数，当访问fullname属性时，会调用这个函数
        // 函数体中的代码会根据firstName和lastName的值来计算fullname的值
        // computed是有缓存的，多次调用如果依赖的数据没有改变，会直接返回缓存的值
        // computed是只读的，不能通过.value直接修改fullname的值
        return firstName.value + lastName.value
        // computed本质上是一个ComputedRefImpl对象，它有一个value属性，用来存储计算出来的值
    })
    let fullName = computed({
        get(){
            return firstName.value + lastName.value
        },
        set(val){
            // 当fullName属性被赋值时，会调用这个setter函数
            // 函数体中的代码会根据val的值来更新firstName和lastName的值
            firstName.value = val.slice(0,1)
            lastName.value = val.slice(1)
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