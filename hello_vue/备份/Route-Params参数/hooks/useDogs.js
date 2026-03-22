import { reactive, onMounted } from 'vue'
import axios from 'axios'
// 通过hooks可以实现模块化，每个hooks都是一个独立的功能模块，互不干扰，类似于v2的mixin
// 每个hooks都有自己的作用域，不会影响其他hooks的运行

export default function () {// 定义响应式数据
    let doglist = reactive([])

    onMounted(() => {
        doglist.push('https:\/\/images.dog.ceo\/breeds\/pembroke\/n02113023_1373.jpg')
    })
    // 定义获取随机狗图的方法
    function getDog() {
        try {
            axios.get('https://dog.ceo/api/breeds/image/random').then(res => {
                console.log(res.data.message)
                doglist.push(res.data.message)  // axios给的是一个对象，对象的data才是需要的数据
            })
        } catch (error) {
            console.log(error)
        }
    }
    // 向外部提供东西(变量和方法)
    return { doglist, getDog }
}