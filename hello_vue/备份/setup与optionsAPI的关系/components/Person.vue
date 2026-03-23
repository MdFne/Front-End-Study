<template>
    <div class="person">
        <p>姓名：{{ name }}</p>
        <p>年龄：{{ age }}</p>
        <button @click="showtel">显示电话</button>
        <button @click="changeAge">改变年龄</button>
        <button @click="changeName">改变姓名</button>
    </div>
</template>

<script>
    export default {
        name: 'Person',
        // beforecreate在实例初始化之后，数据观测(data observer) 和 event/watcher 事件配置之前被调用。
        // beforeCreate(){
        //     console.log('beforeCreate')
        // },
        setup(){
            // 可以在setup中定义响应式数据
            let name = '张三'   // 此时的name不是响应式的
            let age = 18
            let phone = '13800000000'

            // 也可以在setup中定义方法
            function showtel(){
                alert(phone)
            }
            function changeAge(){
                // this.age 报错，this为undeefined
                age++   // 在setup中没有this，所以不能用this.age++
            }
            function changeName(){
                name = '李四'
            }

            // 也可以在setup中定义计算属性
            // 也可以在setup中定义watch
            // 也可以在setup中定义生命周期函数

            // return { a:name, b:age, c:phone}
            // 将所有数据和方法都返回，在模板中可以直接使用
            return { name, age, phone, showtel, changeAge, changeName } 
            //return () => ({ name, age, phone, showtel, changeAge, changeName })
        }
    }
</script>

<style scoped>
    .person {
        border: 1px solid #ccc;
        padding: 10px;
        margin: 10px;
    }
    button{
        margin: 5px;
    }
</style>