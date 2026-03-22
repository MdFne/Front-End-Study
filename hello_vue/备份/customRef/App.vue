<template>
	<div class="main">
		<h2>当前计数: {{ msg }}</h2>
		<input type="text" v-model="msg">
	</div>
		
</template>

<script setup name="App">
	import { ref, customRef } from 'vue'
	// 自定义ref可以添加自定义事件，如click、change等
	import useMsgRef from './useMsgRef.js'

	const { msg } = useMsgRef(200, 2000)


</script>

<style scoped>
	.main {
		padding: 20px;
		border-radius: 10px;
		background-color:lightgray;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
		margin: 20px;
	}
	button {
		margin: 10px;
	}

</style>