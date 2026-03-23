<template>
    <div class="child">
        <h2>Im Child</h2>
        <p>Count: {{ count }}</p>
    </div>
</template>

<script setup name="Child">
    import { ref } from 'vue'
    import axios from 'axios'

    const count = ref(0)

    // 正常情况下用await需要在async函数中调用，但是setup语法糖中不用加async
    let xxx = await axios.get('https://api.zxki.cn/api/twqh')
    // Component <Child>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered. at <Child > at <App>
    console.log(xxx.data)

</script>

<style scoped>
    .child {
        margin: 20px;
        padding: 20px;
        border-radius: 10px;
        background-color:lightblue;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
        border: 1px solid #ccc;
    }
</style>
