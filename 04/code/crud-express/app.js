var express = require('express');
var app = express();

// 配置模板引擎、
app.engine('html', require('express-art-template'));
// 首页路由
app.get('/', function (req, res) {
	res.render('index.html');
})
app.listen(3000, function () {
	console.log('express is runing...');
})
