<template>
    <div>
        <h2>当前求和为{{sum}}</h2>
        <button @click="add">点我求和</button>
    </div>
</template>

<script>
export default {
    // eslint-disable-next-line
    name: 'Person',
    data() {
        return {
            sum: 0  
        }
    },
    methods: {
        add() {
            this.sum += 1
        }
    },
    // 创建前的钩子
    beforeCreate() {
        console.log('beforeCreate')
    },
    // 创建后的钩子
    created() {
        console.log('created')
    },
    // 挂载前的钩子
    beforeMount() {
        console.log('beforeMount')
    },
    // 挂载后的钩子
    mounted() {
        console.log('mounted')
    },
    // 更新前的钩子
    beforeUpdate() {
        console.log('beforeUpdate')
    },
    // 更新后的钩子
    updated() {
        console.log('updated')
    },
    // 销毁前的钩子
    beforeDestroy() {
        console.log('beforeDestroy')
    },
    // 销毁后的钩子
    destroyed() {
        console.log('destroyed')
    },
    
}
</script>

<style scoped>
    h2 {
        color: red;
    }
</style>