import { customRef } from 'vue'

export default function (initValue = 0, delay = 1000) {
    let timer
    // 如果业务要求input后延迟1秒再改变数据则难以实现
    // 解决方案：使用customRef()，接受track跟踪和trigger触发参数
    let msg = customRef((track, trigger) => {
        return {
            // get在msg被读取时调用
            get() {
                track()	// track：跟踪依赖，告诉Vue msg被读取了，需要监听变化
                // 这样当msg被修改时，会触发trigger()，更新依赖
                console.log('get')
                return initValue
            },
            // set在msg被修改时调用
            set(newValue) {
                clearTimeout(timer)
                timer = setTimeout(() => {
                    console.log('set', newValue)
                    initValue = newValue
                    trigger()	// trigger：触发依赖，告诉Vue msg被修改了，需要更新依赖
                }, delay)
            }
        }
    }
    )

    return { msg }
}