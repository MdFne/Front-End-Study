<template>
  <div>
    <!-- v-if 指令：根据表达式的真假来切换元素的显示与隐藏，为假时元素不存在 DOM 中 -->
    <!-- v-show 指令：元素的显示与隐藏（通过 display 属性来实现）
        为假时元素存在 DOM 中，但 display 属性为 none，不会销毁 -->
    <Person v-if="isShow"></Person>
    <button @click="isShow = !isShow">切换显示</button>
  </div>
</template>

<script>
  import Person from './components/Person.vue'

  export default {
    name: 'App',
    components: {
      Person
    },
    data() {
      return {
        isShow: true
      }
    }
  }
</script>

<style>
</style>
