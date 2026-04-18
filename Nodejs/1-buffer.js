// 1. Buffer 缓冲区 alloc 方法
const buf_1 = Buffer.alloc(10);
console.log(buf_1);

// 2. allocUnsafe 方法
const buf_2 = Buffer.allocUnsafe(10); // 未初始化, 速度更快, 但是数据可能不安全
console.log(buf_2);

// 3. from 方法
const buf_3 = Buffer.from('hello');
console.log(buf_3);