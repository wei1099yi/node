require('./a');
// require('./b.js');  // 这句话不会重复执行，因为在引入 a.js 的时候已经引入了 b.js ，所有再次引入 b.js 是会从缓存中找，不会重复执行引入操作（不会执行 b.js 文件的代码，只会拿到 b.js 暴露出的接口对象）这样提高了模块加载的速率

var fn = require('./b');
console.log(fn);  // [Function]


