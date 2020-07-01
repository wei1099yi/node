var template = require('art-template');
var express = require('express');
var http = require('http');
var url = require('url');
var fs = require('fs');

// 1. 创建 app
var app = express();
// 开放静态资源路径
app.use('/public/', express.static('public'));
app.get('/', function (req, res) {
	fs.readFile('./view/index.html', (err, indexData) => {
		if (err) return res.send('404 Not Found...');
		fs.readFile('./public/lib/data.txt', (err, data) => {
			if (err) return res.send('404 Not Found...');
			var comments = JSON.parse(data.toString());
			var htmlStr = template.render(indexData.toString(), {
				comments: comments
			});
			res.send(htmlStr);
		})
	})
});
app.get('/post', function (req, res) {
	fs.readFile('./view/post.html', (err, postData) => {
		if (err) return res.send('404 Not Found...');
		res.send(postData.toString());
	})
});
app.get('/pinglun', function (req, res) {
	fs.readFile('./public/lib/data.txt', (err, data) => {
		if (err) return res.send('404 Not Found...');
		var comments = JSON.parse(data.toString());
		var comment = req.query;
		var today = new Date();
        var m = checkTime(today.getMonth() + 1);
		var d = checkTime(today.getDate());
		
        function checkTime(i) {
          if (i < 10) {
            i = "0" + i;
          }
          return i;
		}
        comment.dateTime = today.getFullYear() + "-" + m + "-" + d;
		comments.push(comment);
		fs.writeFile('./public/lib/data.txt', JSON.stringify(comments), (error) => {
			if (error) return;
			console.log('写入成功！');
			res.redirect(302, '/')
			res.end();
		})
	})
})

// 2. 监听
app.listen(3000, function () {
    console.log('express app is runing...');
})