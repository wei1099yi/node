// http 这个某块负责创建编写服务器
// 1. 加载 http 核心模块
var http = require('http');
// 2. 使用 http.creatServer() 方法创建一个 web 服务器
//  返回一个 server 实例
var server = http.createServer();

// 3. 服务器要干嘛？
//  提供对数据的服务
//  发请求
//  接收请求
//  处理请求
//  给个反馈（发送响应）
//  注册 request 请求事件
//  当客户请求过来，就会自动触发服务器的 request 请求事件，然后执行回调函数
server.on('request', function () {
  console.log('收到客户端的请求了');
});

// 4. 绑定端口号，启动服务器
server.listen(3000, function () {
  console.log('服务器启动成功了，可以通过 http://127.0.0.1:3000/ 来进行访问');
})