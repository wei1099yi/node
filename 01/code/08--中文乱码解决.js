var http = require('http');
var server = http.createServer();

server.on('request', function(req, res) {
  var url = req.url;
  switch(url) {
    case '/':
      res.end('index page');
      break;
    case '/html':
      res.setHeader('Content-type', 'text/html; charset=utf-8')
      res.end('<a href="http://www.baidu.com">点我</a>');
      break;
    case '/plain':
      var plain = [
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
      res.setHeader('Content-type', 'text/plain; charset=utf-8');
      res.end(JSON.stringify(plain));
      break;
    default :
      res.end('404 Not found...');
      break;
  }
})
server.listen(3000, function() {
  console.log("server is runing...");
})