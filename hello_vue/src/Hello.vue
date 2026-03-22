<template>
    <h2>Hello Vue</h2>
    <p>x: {{ x }}</p>
</template>

<script setup name="Hello">
    import { ref } from 'vue'
</script>

<style scoped>
    h2 {
        color: red;
    }
</style>