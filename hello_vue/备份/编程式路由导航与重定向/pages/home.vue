<template>
<div class="home">
<img src="http://www.atguigu.com/images/index_new/logo.png" alt="" />
</div>
</template>

<script setup  name="home">
	import { onMounted } from 'vue'
	import { useRouter } from 'vue-router'

	// 1. 先获取路由实例
	const router = useRouter()
	// 2. 调用路由实例的push方法进行跳转
	onMounted(() => {
		console.log('home组件挂载完成')
		setTimeout(() => {
            // 编写一段代码进行跳转
            router.push({path: '/news'}) // 跳转到新闻列表页
			// 对用户名/密码进行校验等操作会用到路由实例的push方法
        }, 2000)
    })
</script>

<style scoped>
.home {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
}

</style>