var fs = require('fs');
var express = require('express');
// 创建一个路由容器
var router = express.Router();

// 把路由都挂载到路由容器，也就将 app.get() 中的 app 换成 router

// 首页路由
router.get('/students', function (req, res) {
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
});
router.get('/studens/new', function (req, res) {});
router.post('/studens/new', function (req, res) {});
router.get('/studens/edit', function (req, res) {});
router.post('studens/edit', function (req, res) {});
router.get('/studens/delete', function (req, res) {});

// 将 router 导出
module.exports = router;