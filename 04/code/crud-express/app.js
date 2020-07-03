var express = require('express');
// 引用 路由模块
var router = require('./router');

var app = express();

// 开放静态资源文件夹
app.use('/node-modules', express.static('./node_modules/'));
app.use('/public/', express.static('./public/'));
// 使用主体解析中间件获取 post 请求数据
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// 把路由容器挂载到 app 服务中
app.use(router);

// 配置模板引擎、
app.engine('html', require('express-art-template'));

app.listen(3000, function () {
	console.log('express is runing...');
})
