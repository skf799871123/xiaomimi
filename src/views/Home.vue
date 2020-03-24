<template>
  <div class="home">  
    <!-- <button @click="$router.go(-1)">返回</button>
    <img alt="Vue logo" src="../assets/logo.png"><br>
    <router-link to="/produce/123">产品123</router-link><br>
    <router-link to="/produce/abc">产品abc</router-link><br>
    <router-link to="/produce/456?from=kf">产品456</router-link><br> -->
    <Header></Header>  
    <van-tabs  class=" htabs" v-model="active" animated 
    title-active-color="#f30" @click="changeHd"
    >
       <van-tab v-for="item in tabs" :title="item.name" :key="item.page_id">
        <Page :item="item"></Page>
      </van-tab>
    </van-tabs>
  </div>
</template>
<style>
  .home{
    display: flex;
    flex-direction: column;
  }
  .htabs{
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }
  .htabs .van-tabs__content{
    flex: 1;
    overflow: auto;
    scroll-behavior: smooth;
  }
</style>
<script>
// @ is an alias to /src
import Header from '../components/Header'
import Page from '../components/Page.vue'
export default {
  name: 'Home',
  data(){return {
    active:0,
    tabs:[]
    }},
    created(){
      this.getPage();
    },
    methods:{
      changeHd(){
        let el=document.querySelector(".htabs .van-tabs__content");
        el.scrollTop=0;
      },
      getPage(){
        this.$http.get("http://www.520mg.com/mi/page.php")
        .then(res=>{
          console.log(res.data);
          this.tabs=res.data.data.tabs;
        })
      }
    },
  components: {
    Header,Page 
  }
}
</script>
