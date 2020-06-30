var foo = 'foo';

function add (x, y) {
    return x + y;
}

exports.add = add;  // 将 add 方法暴露出去，这样引用 foo.js 文件时就能使用该文件的 add() 方法

// 如果一个模块希望直接导出某个成员（引用的时候不要以 ‘.’ 就能访问），需要用以下方法
module.exports = add;