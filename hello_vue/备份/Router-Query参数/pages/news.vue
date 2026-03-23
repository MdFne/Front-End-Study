<template>
    <div class="news">
        <!-- 导航区 -->
        <ul>
            <li v-for="news in newslist" :key="news.id">
                <!-- query参数通过?a=xx&b=xx的方式传递 -->
                <!-- <RouterLink :to="`/news/detail?id=${news.id}&title=${news.title}&content=${news.content}`">
                    {{news.title}}
                </RouterLink> -->
                <RouterLink :to="{
                    path: '/news/detail',
                    query: {
                        id: news.id,
                        title: news.title,
                        content: news.content
                        }
                    }">
                        {{news.title}}
                </RouterLink>
            </li>
        </ul>
        <!-- 内容区 -->
        <div class="news-content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script setup name="news">
    import { reactive } from 'vue'
    import { RouterView, RouterLink } from 'vue-router'

    const newslist = reactive([
        {id: 1, title: '新闻001', content: '新闻001的内容'},
        {id: 2, title: '新闻002', content: '新闻002的内容'},
        {id: 3, title: '新闻003', content: '新闻003的内容'},
        {id: 4, title: '新闻004', content: '新闻004的内容'},
    ])

</script>

<style scoped> 
    .news {
        display: flex;
    }
    .news-content {
        width: 60%;
    }
    .news ul {
        width: 20%;
        list-style: none;
    }
    .news li {
        margin: 5px;
    }
</style>