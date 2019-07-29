// node构建 web 服务器
// 核心模块 http

// 1.加载核心http模块
const http = require('http')
const serverHandle = require('../../main')
// 2.使用http.createServer()方法创建一个web服务器,返回一个Server实例
    // 1.发送请求
    // 2.接收请求
    // 3.处理请求
    // 4.反馈
const server = http.createServer(serverHandle)
// 客户端请求过来的时候,就会自动触发服务器request请求事件,然后执行第二个回调函数
// request获取客户端发送的一些请求信息
// response响应对象给客户端发送消息
server.on('request', function (reques, response) {
  console.log('收到客户端请求...请求路径是' + response.url)
  // response 对象有一个方法: write 可以给客户端发送响应数据
  // write 可以使用多次,但是最后一次一定要使用 end 来结束响应,否则客户端会一直等待
  response.write('hello')
  response.end()
})

// 绑定端口号,启动服务
server.listen(3001, function () {
  console.log('服务器启动成功.....,可以通过 http://127.0.0.1:3000/来访问')
})