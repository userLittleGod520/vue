import Vue from 'vue'
import App from './App.vue'
import router from './router'

// vue.proptype.text = function(){
//   console.log('给vue添加了text方法')
// }
Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

// console.log(router)

