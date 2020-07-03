var fs = require('fs');
var express = require('express');

// 创建一个路由容器
var router = express.Router();

// 引入封装好的数据文件方法 students.js
var students = require('./students');

// 把路由都挂载到路由容器，也就将 app.get() 中的 app 换成 router
// 首页路由
router.get('/students', function (req, res) {
	// 第二个参数 ’utf-8‘ 表示将取到的数据以固定格式转换成我们能识别的字符串
	students.find(function (err, studentsData) {
		if (err) {
			return res.status(500).send('Server error!');
		}
		// 取到文件的数据后通过模板引擎渲染并发送给浏览器
		res.render('index.html', {
			fruits: [
				'苹果',
				'香蕉',
				'橘子',
				'葡萄'
			],
			students: studentsData
		});
	});
});
// 添加学生
router.get('/students/new', function (req, res) {
	res.render('new.html');
});
router.post('/students/new', function (req, res) {
	// 1. 获取表单数据
	// 2. 处理数据
	// 	将数据保存到 db.json 文件用于持久化
	// 3. 发送响应
	// 	读取文件，转成对象
	// 	push 数据
	// 	将对象转为字符串
	// 	字符串写入文件
	students.save(req.body, function (err) {
		if (err) {
			return res.status(500).send('Server error!');
		}
		res.redirect(302, '/students');
	})
	// console.log(req.body);
	// res.send(req.body);
});
router.get('/students/edit', function (req, res) { });
router.post('students/edit', function (req, res) { });
router.get('/students/delete', function (req, res) { });

// 将 router 导出
module.exports = router;