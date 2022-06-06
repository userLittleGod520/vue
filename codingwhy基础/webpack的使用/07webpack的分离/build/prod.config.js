const path = require('path') // node 自带的包
const webpackdevSever = require('webpack-dev-server')
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/i, // 正则 .特殊含义  \转义  $结尾
        // css-loader 只负责加载  不复制解析
        // style-loader 负责 将样式 添加到DOM中 生效
        // 使用 多个loader时 ，从右向左读取
        use: ['style-loader',"css-loader"],
      },
    ],
  },
}