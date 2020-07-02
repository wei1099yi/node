var express = require('express');
var app = express();

// 开放静态资源文件夹
app.use('/node-modules', express.static('./node_modules/'));
app.use('/public/', express.static('./public/'));
// 配置模板引擎、
app.engine('html', require('express-art-template'));
// 首页路由
app.get('/', function (req, res) {
	res.render('index.html', {
		fruits: [
			'苹果',
			'香蕉',
			'橘子',
			'葡萄'
		]
	});
})
app.listen(3000, function () {
	console.log('express is runing...');
})
