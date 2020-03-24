<template>
    <div>
        <h1>产品</h1>
        <h2>产品参数:{{$route.params.id}}</h2>
        <h2 v-if="$route.query.from"
        >查询参数:{{$route.query.from}}</h2>
        <h2>path:{{$route.path}}</h2>
        <button @click="$router.go(-1)">返回</button>
        <button @click="$router.back()">返回</button><br>
        <button @click="$router.go(1)">前进</button>
        <button @click="$router.forward()">前进</button><br>
        <button @click="$router.push('/')">首页</button>
        <button @click="$router.replace('/')">replace</button><br>

       <router-link :to="{name:'Home'}">切换到首页按路由的名称</router-link> <br>
       <router-link :to="{name:'Produce',params:{'id':'kf'}}">切换到produce</router-link><br>
       <router-link 
       :to="{path:'/produce/xyz?from=中国'}">切换到produce-path</router-link>
       
    </div>
</template>