<template>
  <div id="app">
    <transition 
      enter-active-class="slideInRight animated"
     leave-active-class="slideOutRight animated"
     mode="in-out"
    >
      <router-view class="page"/>
    </transition>
    
    <!-- router-view 存放页面 -->
    <div id="nav">
      <router-link to="/"><img src='./assets/img/home.png'>首页</router-link> 
      <router-link to="/cat"><img src='./assets/img/cat.png'> 分类</router-link> 
      <router-link to="/cart"><img src='./assets/img/cart.png'> 购物车</router-link> 
      <router-link to="/user"><img src='./assets/img/user.png'> 我的</router-link>
      <!-- router-link 切换页面导航 -->
    </div>
    
    
  </div>
</template>
<script>
export default {
  
}
</script>
<style>
*{margin: 0; padding: 0;}
.animated{
  box-shadow: -8px 0 16px rgba(200, 200, 200, 4);
  animation-duration: .4s !important;
}
a{
  text-decoration: none;
  color: #777;
}
.page{
  position: absolute;
  left:0;
  right:0;
  top:0;
  bottom: .98rem;
  overflow: auto;
  background-color: #fff;
}
#nav{
  display: flex;
  box-shadow: 0 -2px 4px rgba(200,200,200,.4);
  width: 100%;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: .98rem;
}
#nav a{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  line-height: .98rem;
}
#nav img{
  width: .4rem;
  height: .4rem;
}
.router-link-exact-active{
  color: #f30;
}
</style>
