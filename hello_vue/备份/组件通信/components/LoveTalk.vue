<template>
    <div class="love-talk">
        <button @click="getLoveTalk">获取一句土味情话</button>
        <ul>
            <li v-for="item in talkStore.talklist" :key="item.id">{{item.content}}</li>
        </ul>
    </div>
</template>

<script setup name="LoveTalk">
    import { reactive } from 'vue'
    import axios from 'axios'

    import { useTalkStore } from '@/store/lovetalk'
    const talkStore = useTalkStore()

    function getLoveTalk() {
        talkStore.getTalk()
    }
</script>

<style scoped>
    .love-talk {
        background-color: lightgreen;
        padding: 10px;
        border-radius: 5px;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
    }
    button {
        width: 75px;
        height: 60px;
        padding: 5px;
        border-radius: 5px;
        border: 1px solid #ccc;
        background-color: #fff;
        cursor: pointer;
        vertical-align: middle;
    }
</style>