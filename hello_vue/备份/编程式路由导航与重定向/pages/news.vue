<template>
    <div class="news">
        <!-- 导航区 -->
        <ul>
            <li v-for="news in newslist" :key="news.id">
                
                <!-- 第二种对象写法，在v-for中可以直接使用item，按钮函数要传参 -->
                <button @click="handleClick(news)">查看详情</button> 
                <RouterLink 
                    :to="{
                        // path: '/news/detail', // params不能使用path，因为path是静态的，不能动态传递参数
                        name: 'xiangqing', 
                        params: {id: news.id, title: news.title, content: news.content}}
                        // 里面定义的params可以在占位中加问号取消必要性
                    ">
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
    import { RouterView, RouterLink, useRouter } from 'vue-router'

    const newslist = reactive([
        {id: 1, title: '新闻001', content: '新闻001的内容'},
        {id: 2, title: '新闻002', content: '新闻002的内容'},
        {id: 3, title: '新闻003', content: '新闻003的内容'},
        {id: 4, title: '新闻004', content: '新闻004的内容'},
    ])

    // 1. 先获取路由实例
    const router = useRouter()
    // 2. 调用路由实例的push方法进行跳转
    function handleClick(news) {
        console.log(news)
        router.push({       // router.push()后可以写和to=“”一样的语法
            name: 'xiangqing', 
            params: {id: news.id, title: news.title, content: news.content}
        })  
    }

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
    .news button {
        margin-right: 5px;
    }
</style>