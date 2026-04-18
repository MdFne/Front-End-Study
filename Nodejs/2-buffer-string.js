// Buffer 缓冲区 转换为字符串
let buf = Buffer.from([105, 108, 111, 118, 101, 121, 111, 117]);

// toString 方法 转换为字符串(utf-8 编码)
console.log(buf.toString());

let buf_2 = Buffer.from('hello', 'utf-8');
// 访问缓冲区的元素
console.log(buf_2[0]);
console.log(buf_2[0].toString(2)); // 1101101

// 溢出异常
buf_2[1] = 361
console.log(buf_2[1]); // 舍弃, 只保留低8位有效位
