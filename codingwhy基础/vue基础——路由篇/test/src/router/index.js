// 配置路由相关信息
import Vue from 'vue';
import VueRouter from 'vue-router';
// import Home from '../components/home'
// import About from '../components/about'
// import User from '../components/user'

const Home =() =>import('../components/home')
const About =() =>import('../components/about')
const User =() =>import('../components/user')
const HomeNews =() =>import('../components/homeNews')
const HomeMessage =() =>import('../components/homeMessage')
const Profile =()=>import('../components/profile')



// 1、通过vue.use 安装插件
Vue.use(VueRouter);

// 2、创建VueRouter 路由对象
const routes = [
    // 默认路由 重定向
    // {
    //     path:'',
    //     redirect:'/home/news'
    // },
    {
        path:'/home',
        component:Home,
        meta:{
            title:'首页'
        },
        children: [
            // {
            //     path:'',
            //     redirect:'news'
            // },
            {
                path:'News',
                component:HomeNews
            },
            {
                path:'Message',
                component:HomeMessage
            }
        ]
    },
    {
        path:'/about',
        component:About,
        meta:{
            title:'关于'
        },
    },
    {
        path:'/user/:userId',
        component:User,
        meta:{
            title:'用户'
        },
    },
    {
        path:'/profile',
        component:Profile,
        meta:{
            title:'档案'
        },
    }
]

// 配置路由和组件之间的映射关系
const router = new VueRouter({
    routes,
    // 将路由 跳转哈希值  修改成 html5里面的 history
    mode:'history',
    linkActiveClass:'active'
})

// 导航守卫  前置钩子(beforeEach hook)
// router.beforeEach((to,from,next)=>{
//     // 从from 跳到 to
//     // next()  把内部的实现的改变了
//     document.title = to.matched[0].meta.title
//     // console.log(to)
//     console.log('++++++')
//     next()
// })

// 后置钩子（afterEach）
// router.afterEach((to,from) =>{
//     console.log('------')
// })

// 共享出去
export default router

