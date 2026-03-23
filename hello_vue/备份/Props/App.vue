<template>
  <div class="app">
    <Person a="haha" :list="personlist"/>
    <!-- list前面加冒号会把传入当作表达式，否则传入当字符串处理 -->
    <!-- 例如 a="1+1" 会传入"1+1"，而不是2, b=“x”会传入"x" -->
    <!-- <Person></Person> --> 
    <!-- vue3可以有多个根标签 -->
  </div>
</template>

<script setup name="App">
  import Person from './components/Person.vue'
  import { ref, reactive } from 'vue'

  // reactive可以传泛型：reactive<T>(obj: T): T
  let personlist = reactive([
    {id:1, name:'张三', age:18, phone:'13800000000'},
    {id:2, name:'李四', age:20, phone:'13900000000'},
    {id:3, name:'王五', age:22, phone:'13700000000'},
  ])
</script>

<style scoped></style>