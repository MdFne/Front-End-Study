<template>
	<div class="main">
		<div class="info">
			姓名: {{ person.name }}
			<br>
			年龄: {{ person.age }}
		</div>
		<button @click="changeName">修改姓名</button>
		<button @click="changeAge">修改年龄</button>
		<br>
		<div class="info">
			姓名: {{ person4.name }}
			<br>
			年龄: {{ person4.age }}
		</div>
		<button @click="person4.name = '李四222'">修改姓名</button>
	</div>
</template>

<script setup name="App">
	import { ref, reactive, toRaw, markRaw } from 'vue'
	// toRaw用于获取响应式对象的原始对象
	// markRaw用于标记一个对象为原始对象，使其永远不会变成响应式，防止被响应式处理
	// 不建议持久保存原始对象

	let person = reactive({	// 响应式对象
		name: '张三',
		age: 18,
	})
	let person2 = toRaw(person)	 // 原始对象
	let person3 = markRaw({name: '李四', age: 28})	 // 原始对象，永远不会变成响应式
	// 使用场景：封装一个对象，防止被响应式处理
	let person4 = reactive(person3)	 // 响应式对象，但是person3永远不会变成响应式

	console.log(person, person2, person3, person4) // person为proxy对象，person2为原始Object对象，person3为原始对象，person4为响应式对象，但是person3永远不会变成响应式对象

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