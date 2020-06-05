var http = require('http');
var server = http.createServer();

// request 请求事件处理函数，需要接受两个参数：
  // Request 请求对象，可以用来获取客户端的一些请求信息，列如请求路径
  // Response 响应对象，用来给客户端发送响应信息
server.on('request', function (request, response) {
  // http://127.0.0.1:3000/a/foo/  =>  请求路径就是 /a/foo/
  console.log('收到客户端的请求了，请求路径是：' + request.url);
  // response 对象有一个方法：write 可以用来给客户端发送响应数据
  // write 可以使用多次，但最后一定要用 end 结束响应，不然客户端会一直等待
  response.write('fas');
  response.write('hh');

  // 告诉客户端，我的话说完了，你可以呈现给用户了
  response.end();
})

// 绑定端口 启动服务器
server.listen(3000, function() {
  console.log('服务器启动成功了，可以通过 http://127.0.0.1:3000/ 来进行访问');
})