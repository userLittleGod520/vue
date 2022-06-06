const path = require('path') // node 自带的包
module.exports = {
  entry:'./src/main.js', // 入口
  output:{
    // 动态获取路径 // path.resolve() 路径拼接
    // __dirname 当前文件的路径
    // 当前是绝对路径
    path:path.resolve(__dirname,'dist'),
    filename:'bundle.js'
  }, // 出口写成对象  { path:'', filename:''}  bundle 打包的意思
  mode: 'development' // 设置mode
}