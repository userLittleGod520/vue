<template>
  <div id="app">

    <div>
      -------app内容:info对象是否是响应式的--------
      <h2>{{$store.state.info}}</h2>
      <button @click="updateInfo">修改信息</button>
    </div>

    <h2>{{message}}</h2>
    <p>-------app内容--------</p>

 <div>
   <h2>Vuex的Muation属性</h2>
   <button @click="add">+</button>
   <button @click="sub">-</button>
   <button @click="addCount(5)">+5</button>
   <button @click="addCount(10)">+10</button>
   <p>原始count</p>
   <p>{{$store.state.count}}</p>

 </div>
   <div>
     <h2>----------App 内容:getters相关信息----------------</h2>
     <h2>{{$store.getters.powerCount}}</h2>
     <h2>---------- hello-vuex内容------------------------</h2>
     <h2>{{$store.getters.more20stu}}</h2>
     <h2>{{$store.getters.more20stuLength}}</h2>
     <h2>{{$store.getters.moreAge(18)}}</h2>
     <button @click="addStudent">添加学生</button>
     <h2>{{$store.getters.student}}</h2>
   </div>

    <hello-vuex></hello-vuex>
  </div>
</template>

<script>

import HelloVuex from './components/HelloVux'
import {DECREMENT, INCREMENTCOUNT, INCTEMENTCOUNT, ADDSTUDENT} from "@/store/mutations-types";

export default {
  name: 'App',
  data(){
    return {
      message:'我是APP的组件',
      count:0,
    }
  },
  methods:{
    updateInfo(){
      // this.$store.commit('updateInfo')
      this.$store.dispatch('AupdateInfo','我是payload')
    },
    add(){
      this.$store.commit(INCTEMENTCOUNT)
    },
    sub(){
      this.$store.commit(DECREMENT)
    },
    addCount(count){
      // payload 负载  添加过去的  参数就是载荷

      // 1.普通提交风格
      // this.$store.commit('incrementCount',count);

      // 2.特殊的提交封装
      this.$store.commit({
        type:INCREMENTCOUNT,
        // count:count,
        count // 会被看成整个对象  那边count变成 payload.count
      })
    },
    addStudent(){
      const stu = {id:114,name:'Alan'}
      this.$store.commit( ADDSTUDENT,stu)
    }
  },
  computed:{

  },
  components: {
    HelloVuex
  }
}
</script>

<style>
div{
  margin:100px;
}
</style>
