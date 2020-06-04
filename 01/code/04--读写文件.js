let fs = require('fs');

fs.readFile('./data/HelloWorld.text', (error, data) => {
  if(error) return;
  let addData = '我是新添加的数据jg！';
  let regReplace = new RegExp(addData, "g");

  let dataArray = data.toString().split('！');
  var bool = dataArray.some(function(t) {
    return t = addData;
  });
  
  if (bool) {
    data = data.toString().replace(regReplace, '');
  }

  fs.writeFile('./data/HelloWorld.text', data+addData, error1 => {
    if(!error1) {
      console.log("添加数据成功！");
      return;
    }
    console.log("添加数据失败！");
  })
})