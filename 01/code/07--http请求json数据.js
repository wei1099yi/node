var http = require('http');
// 创建 Server 服务
var server = http.createServer();
// 监听request 事件
server.on('request', function(req, res) {
  var url = req.url;
  switch(url) {
    case "/":
      res.end('index page');
      break;
      case "/loge":
        res.end('loge page');
        break;
        case "/products":
          var products = [
            {
              name: '苹果 X',
              price: 8888
            },
            {
              name: '菠萝 X',
              price: 89821
            },
            {
              name: '小辣椒 X',
              price: 56555
            }
          ];
          // 响应内容只能是二进制数据或者字符串，以下格式数据都会报错
          //  数字，数组，布尔值，对象等。。。
          res.end(JSON.stringify(products));  // 将数组对象转化成 json格式 字符串 （对象的序列化）
          break;
      default:
        res.end('404!')
        break;

  }
})
// 绑定端口，启动服务
server.listen(80, function() {
  console.log("端口启动成功，使用 http://127.0.0.1/ 访问")
})