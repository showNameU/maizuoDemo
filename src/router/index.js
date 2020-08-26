import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'
import Film from '@/views/Film'
import Cinema from '@/views/Cinema'
import Center from '@/views/Center'
import Nowplaying from '@/views/Film/Nowplaying'
import Detail from '@/views/Detail'
Vue.use(Router)
const router =new Router({
  //这里两行代码的作用就是可以让路径去掉#/
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
     {
      path: '/login',
      component: Login
    },
    {
      path: '/film',
      component: Film,
      children:[//二级路由配置
        {//方法一：直接写在该路径下 方法二：与平常路径无异
          path:'nowplaying',
          component:Nowplaying
        },
        {
          path:'comingsoon',
          component:res=>require(['../views/Film/Comingsoon'],res)
        }
      ]
    },
    {
      path: '/cinema',
      component: Cinema
    },
    {
      path: '/center',
      component: Center
    },
    {
      //可以通过这个id传参
      path:'/detail/:id',
      name:'jydetail',
      component:Detail
    },
    {
      //当浏览器输入一个没有的路径会自动跳转到这个页面
      path:'*',
      redirect:'/film/nowplaying'
    }
  ]
})
//全局路由守卫
router.beforeEach((to,from,next)=>{
  // console.log(to.path)
  if(to.path==='/center'){
    // console.log('验证ing')
    // next('/center')
    next();
  }else{
    next()
  }
})
export default router
