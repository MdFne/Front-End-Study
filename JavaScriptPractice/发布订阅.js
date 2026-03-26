// 事件中心（调度中心）
class EventBus {
    constructor() {
        // 存放所有事件：{ 事件名: [回调1, 回调2] }
        this.events = {};
    }

    // 1. 订阅事件
    on(eventName, callback) {
        if (!this.events[eventName]) {
            this.events[eventName] = [];
        }
        this.events[eventName].push(callback);
    }

    // 2. 发布事件
    emit(eventName, ...args) {
        if (!this.events[eventName]) return;
        // 执行所有订阅的回调
        this.events[eventName].forEach(cb => cb(...args));
    }

    // 3. 取消订阅
    off(eventName, callback) {
        if (!this.events[eventName]) return;
        this.events[eventName] = this.events[eventName].filter(
            cb => cb !== callback
        );
    }
}

// 创建事件总线
const bus = new EventBus();

// A 订阅 "消息" 事件
bus.on("消息", (data) => {
    console.log("A收到：", data);
});

// B 订阅 "消息" 事件
bus.on("消息", (data) => {
    console.log("B收到：", data);
});

// 发布事件（广播）
bus.emit("消息", "今天停水！");