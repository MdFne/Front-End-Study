<template>
	<div class="main">
		<div class="count">
			当前计数: {{ count }}
		</div>
		<div class="info">
			姓名: {{ person.name }} <br>
			年龄: {{ person.age }}
		</div>
		<button @click="add">sum+1</button>
		<button @click="changeName">修改名字</button>
		<button @click="changeAge">修改年龄</button>
		<button @click="changeInfo">修改个人信息</button>
		<div class="car">
			车名: {{ car.name }} <br>
			颜色: {{ car.option.color }} <br>
			价格: {{ car.option.price }} <br>
			座位数: {{ car.option.seat }}
		</div>
		<button @click="changeCarName">修改车名</button>
		<button @click="changeCarColor">修改车颜色</button>
	</div>
</template>

<script setup name="App">
	// 浅层式API
	import { ref, shallowRef, shallowReactive } from 'vue'

	const count = shallowRef(0)	
	const person = shallowRef({
		name: '李四',
		age: 55,
	})
	const car = shallowReactive({
		name: '奔驰',
		option: {
			color: '红色',
			price: 1000000,
			seat: 4,
		}
	})

	// 浅响应式对象,可以处理基本数据类型第一层
	function add() {
		count.value++
	}
	// 浅响应式对象，不能处理深层（.value是第一层，.value.xx是第二层）
	function changeName() {
		person.value.name = '张三'
	}
	function changeAge() {
		person.value.age++
	}

	// 浅层reactive对象,可以处理对象第一层（即car.name）
	function changeCarName() {
		car.name = '宝马'
	}
	// 浅层reactive对象无法监听对象第二层（即car.option.xxx）
	function changeCarColor() {
		car.option.color = '蓝色'
	}

	// 直接操作.value可以改变对象的属性，会触发shallowRef的响应
	// 当只关注浅层（对象整体）修改而不关注细节时可以用shallowRef
	function changeInfo() {
		person.value = {
			name: '王五',
			age: 30,
		}
	}
</script>

<style scoped>
	.main {
		padding: 20px;
		border-radius: 10px;
		background-color:lightgray;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
		margin: 20px;
	}
	.info, .count {
		font-size: 30px;
		font-weight: bold;
	}
	button {
		margin: 10px;
	}

</style>