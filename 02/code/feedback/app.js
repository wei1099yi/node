var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
  var url = req.url;
  console.log(url);

  if(url === '/') {
    fs.readFile('./view/index.html', (err, data) => {
      if(err) {
        return '404 Not Found...';
      }
      res.end(data);
    })
  }else if(url.indexOf('/public/') === 0) {
    fs.readFile('.' + url, function(err, data) {
      if(err) {
        return res.end('404 Not Found...');
      }
      console.log(data);
      res.end(data);
    })
  }

  // res.end(url);
}).listen(3000, function() {
  console.log('runing...');
})