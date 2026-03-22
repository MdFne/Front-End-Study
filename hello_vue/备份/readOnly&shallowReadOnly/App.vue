<template>
	<div class="main">
		<div class="count">
			当前计数: {{ count }}
			<br>
			只读计数: {{ count2 }}
		</div>
		<button @click="add">sum+1</button>
		<button @click="add2">readonly+1</button>
		<div class="car">
			车名: {{ car.name }} <br>
			颜色: {{ car.option.color }} <br>
			价格: {{ car.option.price }} <br>
			座位数: {{ car.option.seat }}
		</div>
		<div class="car">
			车名: {{ car2.name }} <br>
			颜色: {{ car2.option.color }} <br>
			价格: {{ car2.option.price }} <br>
			座位数: {{ car2.option.seat }}
		</div>
		<div class="car">
			车名: {{ car3.name }} <br>
			颜色: {{ car3.option.color }} <br>
			价格: {{ car3.option.price }} <br>
			座位数: {{ car3.option.seat }}
		</div>
		<button @click="changeCarName">修改车名</button>
		<button @click="changeCarColor">修改车颜色</button>
		<br>
		<button @click="changeCar2Name">修改车2名</button>
		<button @click="changeCar2Color">修改车2颜色</button>
		<br>
		<button @click="changeCar3Name">修改车3名</button>
		<button @click="changeCar3Color">修改车3颜色</button>
	</div>
</template>

<script setup name="App">
	// readonly和shallowReadonly，保护对象
	// readonly创建一个对象的深只读副本，不能直接修改其属性
	// shallowReadonly创建一个对象的浅只读副本，只能修改第一层属性，深层次的属性依旧可以修改
	import { ref, reactive, shallowRef, shallowReadonly, readonly } from 'vue'

	const count = shallowRef(0)	
	// readonly()函数可以创建一个只读的响应式对象，不能直接修改其属性
	// 但是如果修改了传入的响应式对象的属性，只读对象也会触发响应（sum++，readonly也会++）
	const count2 = readonly(count)	// 必须传入一个响应式对象，不能传入基本数据类型或null
	const car = reactive({
		name: '奔驰',
		option: {
			color: '红色',
			price: 1000000,
			seat: 4,
		}
	})
	const car2 = readonly(car)
	// 同理，car2的属性不能直接修改，但是car1的属性修改会触发car2的属性响应
	const car3 = shallowReadonly(car)
	// shallowReadonly只限制第一层只读，深层次的属性依旧可以修改(并且可以触发其他响应式对象的响应)

	// 浅响应式对象,可以处理基本数据类型第一层
	function add() {
		count.value++
	}
	function add2() {
		count2.value++
	}

	function changeCarName() {
		car.name = '宝马'
	}
	function changeCarColor() {
		car.option.color = '蓝色'
	}

	function changeCar2Name() {
		car2.name = '奔驰'
	}
	function changeCar2Color() {
		car2.option.color = '蓝色'
	}

	function changeCar3Name() {
		car3.name = '奔驰'
	}
	function changeCar3Color() {
		car3.option.color = '蓝色'
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
	.info, .count, .car {
		font-size: 30px;
		font-weight: bold;
	}
	button {
		margin: 10px;
	}

</style>