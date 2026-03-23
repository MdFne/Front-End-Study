<template>
    <button @click="isOpen = true">Open Modal</button>
    <!-- 弹窗组件，通过teleport将弹窗组件移动到body中，类选择器id选择器都可以使用 -->
    <teleport to="body">
        <div class="modal" v-show="isOpen">
            <h2>Im Modal</h2>
            <p>Content here</p>
            <button @click="close">Close</button>
        </div>
    </teleport>
</template>

<script setup name="Model"> 
    import { ref } from 'vue'

    const isOpen = ref(false)

    const close = () => {
        isOpen.value = false
    }

</script>

<style scoped>
    .modal {
        width: 200px;
        height: 200px;
        background-color: skyblue;
        border-radius: 10px;
        padding: 5px;
        box-shadow: 0 0 5px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: fixed;
        top: 10%;
        left: 50%;
        transform: translate(-50%, 0%);
    }
    button {
        margin: 10px;
    }
</style>
