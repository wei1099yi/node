var template = require('art-template');

// 这里不是浏览器
// template('script 标签 id', {对象});

var ret = template.render('hello {{ name }}', {
  name: 'Jack'
})

console.log(ret);