// fs 是file-system 的缩写，就是文件系统的意思
// 读取文件必须引入 fs 核心模块

// 1.使用 require 方法加载 fs 核心模块
var fs = require('fs');

// 2.读取文件，第一个参数就是读取的路径，第二个参数是回调函数，有两个参数--error：读取失败就是错误对象，成功就是 null； data：读取成功就是读到的数据，失败就是错误对象；
fs.readFile("./data/HelloWorld.text", (error, data) => {
  if(error) {
    console.log("读取文件失败！");
    return;
  }
  console.log(data.toString());
// <Buffer 48 65 6c 6c 6f 20 77 6f 72 6c 64 21 20 e8 af bb e5 8f 96 e6 96 87 e4 bb b6 ef bc 81>
});