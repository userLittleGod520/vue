<template>
  <div id="app">
    <router-link to="/home" tag="button" replace >首页</router-link>
    <router-link to="/about" tag="button"  replace>关于</router-link>
    <router-link v-bind:to="/user/+username">用户</router-link>
<!--    <router-link :to="{path:'/profile',query:{name:'lsihen',height:165,weight:160}}">档案</router-link>-->
    <button @click="userClick">用户</button>
    <button @click="profileClick">档案</button>
    <!-- <button @click="btnClick">首页</button>
    <button @click="btnClick2">关于</button> 
    <button @click=""></button> -->

    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return{
      username:'zhangsan',
      imgUrl:'http://www.baidu.com/logo.png'
    }
  },
  methods:{
    btnClick(){
      // 通过代码的方式 修改路由 vue-router
      // history.pushState = ({},'','demo') // 不要绕过router去直接修改
      // push => pushState
      this.$router.push('/home')
     console.log( '我是首页');
    },
     btnClick2(){
      this.$router.push('/about')
     console.log( '我是关于页面');
    },
    userClick(){
      this.$router.push('/user/' + this.username)
    },
    profileClick(){
      this.$router.push({
        path:'/profile',
        query:{
          name:'kobe',
          age:19,
          height:165
        }
      })
    }
  }
}
</script>

<style>
.active:active{
  background-color:Red;
}
*{
  margin:20px;
}
li{
  list-style-type: none;
  padding:20px;
}
a{
  text-decoration: none;
  color:black;
}
</style>
