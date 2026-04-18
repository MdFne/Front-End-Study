/* 需求
 * 1. 新建一个文件，input.txt
 * 2. 写入文件内容，hello world
 */

// 1. 引入 fs 模块
const fs = require('fs');

/*
语法: fs.writeFile(file, data[, options], callback)
参数说明:
    · file 文件名
    · data 待写入的数据
    · options 选项设置(可选)
    · callback 写入回调
返回值:undefined
*/

// 2. 写入文件内容
fs.writeFileSync('./input.txt', 'hello world', err => {
    if (err) {
        console.log(err);
    }
});
//console.log('写入成功');
