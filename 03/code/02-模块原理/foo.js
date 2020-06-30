// 在 node 中，每一个模块都有一个叫 module 的对象,该 module 对象中还有一个 exports 对象，如下代码
// var module = {
//     "exports": {
//         "foo": "foo",
//         "add": "add"
//     }
// }
// 也就是说需要对外导出成员，只需要把要导出的成员挂载到 module.exports 即可，如
module.exports.foo = 'bar';

// 为了简化代码，node 使得 exports 等于 module.exports: 即 
console.log(exports === module.exports)  // true
exports = module.exports
// 也就是说 两者都指向了同一个对象

// 当需要导出单个成员时，给exports赋值是无效的，
// 因为两者指向的是同一个对象，而且在每一个模块的最后只会返回 module.exports
// exports = 'foo' ==> 无效，这样只是更改了exports的指向而已，并没有修改到 module.exports

// 而且在每一个模块的最后边都会有一个语句如下：
return module.exports;
// 也就是说，谁来 require 我，谁就能得到 module.exports