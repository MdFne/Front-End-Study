<template>
    <div class="person">
        ???
        <!-- <h2>{{ list }}</h2> -->
         <ul>
            <!-- v-for遍历数组，=item in list 表示遍历list数组，每次遍历的元素赋值给item -->
            <li v-for="item in list" :key="item.id">
                {{ item.name }} {{ item.age }} {{ item.phone }}
            </li>
            <!-- 可以在v-for中使用index索引 -->
             <!-- v-for + :list="5",也可以收取数字，用于重复渲染元素，但是要注意数字只渲染索引，不渲染元素 -->
         </ul>
    </div>
</template>

<script>    // export default 导出组件，但是不能和setup合并
    export default {
        name: 'Person', // 组件的名称，在模板中使用，不写默认就是文件名
    }
</script>

<script setup>  
    // 一般defineXxx宏函数不用import引入，直接使用即可
    import { ref, watchEffect, watch, defineProps } from 'vue'

    // 通过defineProps定义props从父组件接收数据
    // defineProps(['a'])
    // let props = defineProps(['a', 'list'])  // defineProps返回值是一个对象
    // 可以传入>接受，但是传入<接受会收到undefined
    // console.log(props.a)  // 可以通过props.a访问到父组件传递过来的数据
    // defineProps<{list?:persons}> () ts写法，使用泛型
    // JS写法
    defineProps({
        list: {
            type: Array,
            // default接受函数返回一个值（对象数组）
            default: () => [{
                id: 1,
                name: '张三',
                age: 20,
                phone: '13800000000'
            }],
            required: true
        }
    })

    // Vue3新写法？
    // withDefaults(defineProps({
    //     list: {
    //         type: Array,
    //         default: () => [],
    //         required: true
    //     }
    // }), {
    //     list: () => []
    // })
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