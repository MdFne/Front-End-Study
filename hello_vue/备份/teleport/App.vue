<template>
	<div class="outer">
		<h2>Im App</h2>
		<img src="http://www.atguigu.com/images/index_new/logo.png" alt="">
		<br>
		<Modal></Modal>
	</div>
		
</template>

<script setup name="App">
	import { ref, customRef } from 'vue'
	import Modal from './Modal.vue'

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
		filter: saturate(2);
	}
	button {
		margin: 10px;
	}
	img {
		width: 180px;
	}

</style>