// 导入
const {sum,sub} = require('./js/rand');
console.log(sum(30,20))
console.log(sub(30,20))

// webpack打包时 会找到入口文件 所依赖的文件 进行打包
// 没有跟入口文件进行依赖的文件不会 进行打包操作

// 依赖的css文件
// require('./css/normal.css')