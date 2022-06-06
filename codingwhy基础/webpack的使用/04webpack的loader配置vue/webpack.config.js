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
  mode: 'development',// 设置mode
   // 配置 webpack -css loader
  module: {
    rules: [
      {
        test: /\.css$/i, // 正则 .特殊含义  \转义  $结尾
        // css-loader 只负责加载  不复制解析
        // style-loader 负责 将样式 添加到DOM中 生效
        // 使用 多个loader时 ，从右向左读取
        use: ['style-loader',"css-loader"],
      },
      {
        test: /.vue$/,//正则表达式，匹配以.vue结尾的文件
        loader: 'vue-loader'
      }
    ],
  },
}