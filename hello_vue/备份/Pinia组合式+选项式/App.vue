<template>
    <div>
        <Count></Count>
        <br>
        <LoveTalk></LoveTalk>
    </div>
</template>

<script setup name="App">
    import Count from './components/Count.vue'
    import LoveTalk from './components/LoveTalk.vue'
</script>

<style scoped>
    div {
        margin: 20px;
    }
</style>