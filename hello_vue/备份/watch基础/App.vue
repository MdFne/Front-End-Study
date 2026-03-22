<script>
import Person from './components/Person.vue'
  export default {
    name: 'App',  // 根组件
    components: {   // 注册组件
        Person,
    }
  }
</script>

<template>
  <div class="app">
    <Person></Person>  
    <!-- <Person></Person> --> 
    <!-- vue3可以有多个根标签 -->
  </div>
</template>

<style scoped></style>
