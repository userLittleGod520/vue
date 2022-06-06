// 配置路由相关的信息
import Vue from "vue";
import VueRouter from "vue-router";
import Home from '../components/home';
import About from '../components/about'

// 1、通过vue.use(插件) 安装插件
Vue.use(VueRouter)

// 2、创建VueRouter 路由对象
const routes = [ 
    {
        path:'/home',
        component:Home
    },
    {
        path:'/about',
        component: About 
    }
]
const router = new VueRouter({
    // 配置路由和组件之间的应用关系
    // routers:[routers] 对象字符串增强写法
    routes
})

// 3、将router对象 暴露出去
export default router