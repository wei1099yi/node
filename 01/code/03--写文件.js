let fs = require('fs');

// 第一个参数：文件路径（不存在文件则创建文件）
// 第二个参数：数据
// 第三个参数：回调函数(参数 error 写入成功error 为 null )

fs.writeFile('./data/写文件.md', '写入的数据！', error => {
  if(error) return;
  console.log("写入成功！");
})