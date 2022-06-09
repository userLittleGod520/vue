<template>
  <div>
    <h2>我是profile组件</h2>
    <p>{{$route.query.name}}</p>
    <p>{{$route.query.height}}</p>
    <p>{{$route.query.weight}}</p>
  </div>
</template>

<script>
export default {
  name: "profile"
}
</script>

<style scoped>

</style>