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
