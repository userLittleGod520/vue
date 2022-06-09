<template>
  <div>
      <h2>我是用户界面</h2>
      <p>嘿嘿嘿嘿嘿</p>
      <h2>{{$route.params.userId}}</h2>
    <button @click="btnClick">局部vue-router</button>
  </div>
</template>

<script>
export default {
  name: 'User',
    computed:{
      userId(){
        return this.$route.params.userId
      }
    },
  methods:{
    btnClick(){
      // console.log(this.$router);
      // console.log(this.$route)
    }
  }
}
</script>

<style>

</style>