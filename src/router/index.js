import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Category from '../views/Category.vue'
import User from '../views/User.vue'
import Produce from '../views/Produce.vue'
import Login from '../views/Login.vue'
import Cart from '../views/Cart.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',//首页
    name: 'Home',
    component: Home,
    alias:["/home","/main"]
  },
  {
    path: '/user',//我的
    name: 'User',
    component: User
  },
  {
    path: '/cart',//购物车
    name: 'Cart',
    component: Cart
  },
  {
    path:'/set',
    redirect:'/user'
  },
  {
    path: '/login',//获取用户信息
    name: 'Login',
    component: Login
  },
  {
    path: '/produce/:id',//前进后退
    name: 'Produce',
    component: Produce
  },
  {
    path: '/cat',
    name: 'Category',//分类
    component: Category,
    meta:{requireAuth:true}
    // requireAuth代表当前页面需要有权限才能进去
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    //当需要about js时候浏览器才会加载
    //当浏览器有下载空闲的时候会提前把about.js下载
  }
 
]

const router = new VueRouter({
  routes
})
import Cookie from '../assets/js/Cookie';
//当用户进入到购物车cart 之前判断用户是否登录  用cookie获取的信息
router.beforeEach((to,from,next)=>{
  console.log("to",to);
  console.log("from",from);
  //判断to的路由元素信息是否需要权限
  if(to.meta.requireAuth){
    if(!Cookie.getCookie("uname")){
      next("/login?redirect="+to.path);
      //如果没有用户名 那么跳转到登录
      // to.path要去的页面地址
    }else{
      next();//直接进入到to页面
    }
  }
  next();
})
export default router
