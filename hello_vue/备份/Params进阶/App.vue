<template>
  <div class="app">
    <h2>路由测试</h2>
    <!-- 导航区 -->
    <div class="navi">
      <RouterLink :to="{name: 'zhuye'}" active-class="active">首页</RouterLink>
      <RouterLink to="/about" active-class="active">关于</RouterLink>
      <RouterLink to="/contact" active-class="active">联系</RouterLink>
      <RouterLink to="/news" active-class="active">新闻</RouterLink>
    </div>
    <!-- 展示区 -->
    <div class="main-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup name="App">
import { RouterView, RouterLink } from 'vue-router'

</script>

<style scoped>
    .app {
        border: 1px solid #ccc;
        padding: 20px;
        margin: 10px;
    }
    .navi {
        border: 1px solid #ccc;
        padding: 10px;
        margin: 0;
    }
    .navi a {
        margin: 5px;
        width: 50px;
        height: 30px;
        line-height: 30px;
        display: inline-block;
        text-align: center;
        background-color: gray;
        color: #fff;
        text-decoration: none;  
    }
    .navi a.active {
        background-color: red;
    }
    .main-content {
        border: 1px solid #ccc;
        padding: 10px;
        margin: 0px;
    }
</style>