var fooExports = require('./foo');

// console.log(foo);  // ReferenceError: foo is not defined (模块作用域，找不到 foo.js 里的变量 foo)
// fooExports.add(2, 3);  // 5
// console.log(fooExports.add);
console.log(fooExports);  // [Function: add]
