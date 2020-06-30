// require('模块标识符')
// 模块标识符分为三种，路径形式标识符（自定义模块）、核心模块标识符、第三方模块标识符
// 1. 路径形式标识符（后缀名 .js 可以省略）
//  ./ 当前路径 不可省略
//  ../ 上一级路径 不可省略
//  / 几乎不用 表示当前文件模块所属磁盘根路径
// 2. 核心模块标识符
//  require('fs')
//  require('http')
//  核心模块本质也是文件，已经被编译进了二进制文件中，只需按名字加载即可
// 3. 第三方模块
//  凡是第三方模块都必须通过 npm 下载，以下是引用过程
//      先找到当前文件所在目录的 node_modules 目录
//      再找  node_modules\art-template
//      再找  node_modules\art-template\package.json
//      再找  node_modules\art-template\package.json 文件中的 main 属性，该属性记录了 art-template 的入口模块
//      然后加载使用这个第三方包，实际上最终加载的还是文件
//      如果 package.json 文件不存在或 main 指定的入口模块不存在，node 会自动找该目录下的 index.js
//      如果 Index.js 找不到则向上一级目录中的 node_modules 目录找，还是没有找到则继续向上一级找，最后找不到就报错： can not find module XXX
// 注意：一个项目只有一个 node_mdules 目录，放在项目根目录