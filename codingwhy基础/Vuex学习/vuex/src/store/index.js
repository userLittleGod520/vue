import Vue from 'vue'
import Vuex from 'vuex'
import {DECREMENT, INCREMENTCOUNT, INCTEMENTCOUNT, ADDSTUDENT} from "@/store/mutations-types";

// 1、安装插件  会使用vue里面的 install方法
Vue.use(Vuex)

// 创建module的 套娃
const modeuleA = {
  state:{
    name:'zhangsan'
  },
  getters:{},
  mutations:{},
  actions:{},
}

// 2、创建对象
const store = new Vuex.Store({
  // 保存状态的
  state:{ // 加入到state里面 都会被加入响应式系统  会监听属性的变化而变化
    count:1000,
    students:[
      {id:110,name:'lishen',age:19},
      {id:111,name:'lishen2',age:5},
      {id:112,name:'lishen3',age:10},
      {id:113,name:'lishen4',age:30}
    ],
    info:{
      name:'kobe',
      age: 40,
      height:'1.98m'
    }
  },
  // 可以
  mutations:{
    updateInfo(state){
      // return state.info.name = 'lishen' // 同步操作 Muations
      // 异步操作 Vue检测工具dev 无法跟踪数据
      // 使用 state的信息是个错误的信息   错误代码
      setTimeout(()=>{
        state.info.name ='lishen'
      },1000)
      //
      // 不能使用没有在state里面定义的东西 可以增加但不会加入响应式系统里面
      // 解决办法
      // 1、通过数组的push,方法添加响应式
      // 2、splice()方法
      // 3、Vue.set() 方法
      // return state.info['adress'] = '洛杉矶'
      // Vue.set(state.info,'adress','洛杉矶')
      // Vue.delete(state.info,'age') 动态删除
    },
    [INCTEMENTCOUNT](state){
    return this.state.count++
    },
    [DECREMENT](state){
      return this.state.count--
    },
    [INCREMENTCOUNT](state,payload){
      // 因为app里面将 count变成了对象，所以这边 需要使用负载的方法写出来
      state.count += payload.count
    },
    [ADDSTUDENT](state,stu){
      state.students.push(stu)
    }
  },
  actions:{
    // context: 上下文  相当于store对象
    AupdateInfo(context,payload){
      setTimeout(()=>{
        context.commit('updateInfo')
        console.log(payload)
      },1000)
    }
  },
  getters:{
     powerCount(state){
       return state.count * state.count
     },
    more20stu(state){
       return state.students.filter(s => s.age >20)
    },
    student(state){
       return state.students
    },
    more20stuLength(state,getters){
       return getters.more20stu.length
    },
    moreAge(state){
       return function(age){
         return state.students.filter(s=> s.age >age)
       }
    }
  },
  modules:{
         a: moduleA
  }
})

// 3、导出store对象
export default store
