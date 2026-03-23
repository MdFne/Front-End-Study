<template>
	<div class="outer">
		<h2>Im App</h2>
		<Suspense>
			<!-- default内容是异步组件加载完成的内容 -->
			<template v-slot:default>
				<Child></Child>
			</template>	
			<!-- fallback内容: 异步组件尚未加载完成时，显示的默认内容 -->
			<template v-slot:fallback>
				<div>
					<p>Loading...</p>
				</div>
			</template>
		</Suspense>
	</div>
		
</template>

<script setup name="App">
	// Suspense组件用于处理异步组件的加载状态，当异步组件加载完成时，会显示默认内容，否则显示fallback内容
	// 当异步组件加载完成时，会将默认内容替换为异步组件的内容
	import { Suspense } from 'vue'
	import Child from './Child.vue'

</script>

<style scoped>
	.outer {
		width: 400px;
		height: 400px;
		padding: 20px;
		border-radius: 10px;
		background-color:lightgray;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
		margin: 20px;
		/* 饱和度，但是加了这一行之后子组件modal会参考父组件定位，即使设置了fixed */
		/* filter: saturate(2); */
	}
	button {
		margin: 10px;
	}
	img {
		width: 180px;
	}

</style>