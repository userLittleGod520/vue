var name = '小明'
var age  = 18
var flag = true

function sum(num1,num2){
  return num1 + num2
}

if (flag){
  console.log(sum(20,30))
}

// 导出 export
// 导入 import from '文件名'

export {
  flag,sum
}