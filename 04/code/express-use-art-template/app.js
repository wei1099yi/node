// 1.引入 express 框架
var express = require('express');
var app = express();

app.use('/public/', express.static('./public/'))

// 使用主体解析中间件 express.json() 或 express.urlencoded() 才能使用 req.body() 方法获取 post 方式提交的数据
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
// 2. 配置使用 art-template 模板引擎
// 	app.engine() 的第一个参数表示：当渲染以 .art 后缀名的文件时，使用 art-template 模板引擎
// 	express-art-template 用来把 art-template 整合到 express 中，虽然不用加载 art-template，但是也必须安装
// 	因为 express-art-template 依赖于 art-template
// app.engine('art', require('express-art-template'));
app.engine('html', require('express-art-template'));

// 3. 使用模板引擎进行渲染
// 	Express 为 Response 提供了一个方法：render（渲染），该方法默认不可用，配置了模板引擎后才可用。
// 	res.render("模板名"， {模板数据}) >> 第一个参数不能写路径，默认会去项目的 views 目录中查找该模板文件
// 	也就是说 Express 约定开发人员要将所有视图文件放在 views 目录中
app.get('/', (req, res) => {
	res.render('404.html');
});
// 因为 admin 在 views 目录中，所以 res.render() 要到 admin 目录中找 index.html 文件
app.get('/admin', (req, res) => {
	res.render('admin/index.html', {
		"comments": [
			{
				"name": "张三0",
				"message": "今天天气不错0！",
				"dateTime": "2015-10-16"
			}
		]

	});
})
app.get('/post', (req, res) => {
	res.render('post.html');
})
// 获取 post 方式提交的数据
app.post('/post', (req, res) => {
	console.log(req.body);
	res.json(req.body)  // 响应 JSON 数据，使用的是JSON.stringify() 方法
})
// 如果要修改默认的 views 路径，则用以下代码
// app.set('view', render函数的默认路径) 注意：第一个参数的名称必须是 views，不可更改 
app.listen(3000, () => {
	console.log('Express is runing../');
})