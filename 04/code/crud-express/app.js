var express = require('express');
var app = express();
var fs = require('fs');

// 开放静态资源文件夹
app.use('/node-modules', express.static('./node_modules/'));
app.use('/public/', express.static('./public/'));
// 配置模板引擎、
app.engine('html', require('express-art-template'));
// 首页路由
app.get('/', function (req, res) {
	// 第二个参数 ’utf-8‘ 表示将取到的数据以固定格式转换成我们能识别的字符串
	fs.readFile('./db.json', 'utf-8', (err, data) => {
		if (err) return res.status(500).send('Server error!');
		console.log(typeof(data));  // string
		// 取到文件的数据后通过模板引擎渲染并发送给浏览器
		res.render('index.html', {
			fruits: [
				'苹果',
				'香蕉',
				'橘子',
				'葡萄'
			],
			students: JSON.parse(data).students
		});

	})
})
app.listen(3000, function () {
	console.log('express is runing...');
})
