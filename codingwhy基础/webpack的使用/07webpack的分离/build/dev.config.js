
module.exports = {
  devServer:{
    static:{
      directory:path.join(__dirname,'./'),
    },
    compress:true,
    port:9000,
  }
}