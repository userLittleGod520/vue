// commonJs 的模板语法
function sum(num1,num2){
  return num1 + num2
}
function sub(num1,num2){
  return num1 - num2
}
// 暴露出去
module.exports = {
  sum,sub
}