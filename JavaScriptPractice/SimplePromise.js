class SimplePromise {
    constructor(executer) {
        this.state = 'pending'
        this.value = undefined
        this.onResolvedCallbacks = []
        this.onRejectedCallbacks = []

        const resolve = (value) => {
            if (this.state === 'pending') {
                this.state = 'resolved'
                this.value = value
                this.onResolvedCallbacks.forEach(fn => fn())
            }
        }

        const reject = (reason) => {
            if (this.state === 'pending') {
                this.state = 'rejected'
                this.value = reason
                this.onRejectedCallbacks.forEach(fn => fn())
            }
        }

        executer(resolve, reject)
    }

    then(onResolved, onRejected) {
        if (this.state === 'resolved') {
            onResolved(this.value)
        }
        if (this.state === 'rejected') {
            onRejected(this.value)
        }
        if (this.state === 'pending') {
            this.onResolvedCallbacks.push(() => onResolved(this.value))
            this.onRejectedCallbacks.push(() => onRejected(this.value))
        }
    }
}

// 1. 创建 Promise 实例
const p = new SimplePromise((resolve, reject) => {
    // 模拟异步操作（定时器/接口请求）
    setTimeout(() => {
        // 成功：调用 resolve
        resolve('异步操作成功！')

        // 失败：调用 reject
        // reject('异步操作失败！')
    }, 1000)
})

// 2. 调用 then 处理结果
p.then(
    (res) => console.log('成功：', res),
    (err) => console.log('失败：', err)
)