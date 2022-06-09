<template>
<div>
    <h2>我是首页</h2>
    <p>哈哈哈哈哈哈</p>
    <router-link to="/home/news" >新闻</router-link>
    <router-link to="/home/message">消息</router-link>
    <router-view></router-view>
  <h2>{{message}}</h2>
</div>
</template>

<script>
export default {
    name:'home',
  data(){
      return {
        message:'你好呀',
        path:'/home.news'
      }
  },
  created(){
    console.log('create')
  },
  // 活跃状态
  activated() {
    // console.log('activated')d
    this.$router.push(this.$route.path)
  },
  // 不活跃状态
  // deactivated() {
  //   console.log('deactivated')
  //   this.path = this.$route.path
  // }

  // 局部导航守卫
  beforeRouteLeave(to,from,next){
    console.log(this.$route.path);
      this.path = this.$route.path;
      next()
  }
}
</script>

<style>

</style>