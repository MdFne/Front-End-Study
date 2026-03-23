<template>
<div class="about">
    <h2>关于</h2>
</div>
</template>

<script setup name="About">
    import { onMounted, onUnmounted } from 'vue'
    onMounted(() => {
        console.log('about mounted')
    })
    onUnmounted(() => {
        console.log('about unmounted')
    })

</script>

<style scoped> 
.about {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
