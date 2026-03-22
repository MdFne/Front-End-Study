// 1. 引入express
const express = require('express')

// 2. 创建应用对象
const app = express()

// 3. 创建路由规则
// request 是对请求报文的封装
// response 是对响应报文的封装
// 如果请求行url第一个参数是get，第二个参数是/server，执行这个函数
app.get('/server', (request, response) => {
    // 设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*')
    // 允许所有头信息
    response.setHeader('Access-Control-Allow-Headers', '*')
    // 设置响应体
    response.send('Hello AJAX GET')
})

app.get('/delay', (request, response) => {
    // 设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*')
    // 允许所有头信息
    response.setHeader('Access-Control-Allow-Headers', '*')
    setTimeout(() => {
        response.send('Delay 3000ms')
    }, 3000);
})

// 如果请求行url第一个是post，第二个参数是/server，执行这个函数
app.post('/server', (request, response) => {
    // 设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*')
    // 允许所有头信息
    response.setHeader('Access-Control-Allow-Headers', '*')
    // 设置响应体
    response.send('Hello AJAX')
})

app.all('/json-server', (request, response) => {
    // 设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*')
    // 允许所有头信息
    response.setHeader('Access-Control-Allow-Headers', '*')
    // 设置响应体
    // response.send('Hello AJAX JSON ')
    // 设置响应对象
    const data = {
        name: 'wyx',
        age: 20
    }
    // 发送前需要对对象转化
    response.send(JSON.stringify(data))
})

app.all('/axios', (request, response) => {
    // 设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*')
    // 允许所有头信息
    response.setHeader('Access-Control-Allow-Headers', '*')
    // 设置响应体
    response.send('Hello Axios')
})

// 针对IE缓存，修改返回结果不会及时更新到浏览器
// 解决方法：新加一个Date参数
// xhr.open("GET",'http://127.0.0.1:8000/ie?t='+Date.now())

// 4. 监听端口启动服务
app.listen(8000, () => {
    console.log('服务启动，8000端口监听中....');

})