<template>
    <ul class="news-list">
        <li>编号:{{query.id}}</li>
        <li>标题:{{query.title}}</li>
        <li>内容:{{query.content}}</li>
    </ul>
</template>

<script setup name="detail">
    import { useRoute } from 'vue-router';
    import { toRefs } from 'vue'

    // 要接受路由参数，必须要先使用useRoute创建路由对象
    let route = useRoute() // 一个proxy对象，包含了当前路由的信息（取决于参数传递方式）
    console.log(route.query)
    let{ query } = toRefs(route)
</script>

<style scoped>
    .news-list {
        list-style: none;
        padding-left: 20px;
    }
    .news-list>li {
        line-height: 30px;
    }
</style>