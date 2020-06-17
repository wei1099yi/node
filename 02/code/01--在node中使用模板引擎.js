// 1. 下载 art-template：npm install art-template
// 2. 加载art-template
// 3.查文档用API：https://aui.github.io/art-template/zh-cn/docs/
var template = require('art-template');
var fs = require('fs');

// 这里不是浏览器，没有标签
// template('script 标签 id', {对象});

// template。render('模板字符串', 替换的对象)
var ret = template.render('hello {{ name }}', {
  name: 'Jack'
})
console.log(ret);

// var tplStr = `
// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>Document</title>
// </head>
// <body>
//   <p>大家好，我叫：{{ name }}</p>
//   <p>我今年{{ age }}岁了</p>
//   <h1>我来自：{{ province }}</h1>
//   <p>我喜欢：{{ each hobbies }} {{ $value }} {{ /each }}</p>
// </body>
// </html>
// `;
var strData = {
  name: 'Jack',
  age: 18,
  province: '北京市',
  hobbies: ['写代码', '唱歌', '打游戏']
}

fs.readFile('./template.html', (err, data) => {
  // 读取到的数据默认是二进制数据，而 render 只能处理字符串，所以需要转换
  if (err) return console.log('读取文件失败！');
  var ret1 = template.render(data.toString(), strData);

  console.log(ret1);
})

