<template>
     <div class="category">
         <van-nav-bar title="分类" left-arrow>
             <van-icon name="search" slot="right" />
         </van-nav-bar>
         <div class="content">
             <div class="left">
                 <div class="item" v-for="(item,index) in cate" :key="index">
                     {{item.category_name}}
                 </div>
            </div>
             <div class="right">
                 <div class="item" v-for="(item,index) in cate" :key="index">
                     <div v-for="(item,index) in cate.category_list" :key="index">
                         <div v-if="category_list.view_type=='cells_auto_fill'">
                             <div v-for="(item,index) in cate.body.items" :key="index">
                                 <img :src="item.img_url" alt="">
                             </div>
                         </div>
                     </div>
                 </div>
            </div>
         </div>
     </div>
</template>
<script>
export default {
    data(){return{ 
        cate:[],
    }},
    created(){
        this.getCate();
    },
    methods:{
       getCate(){
           this.$http.get("/mi/category.php")
           .then(res=>{
               this.cate=res.data.data;
           })
           .catch(err=>{
               console.log(err);
           })
       } 
    }
}
</script>
<style scope>
    .category{display: flex; flex-direction: column;}
    .content{display: flex; flex: 1; height: 100%; overflow: hidden;}
    .left{
        width: 1.5rem;
         overflow: auto;
         height: 100%;
         border-right: 1px solid palegoldenrod;
         background-color: rgb(0, 255, 106);
    }
    .right{flex: 1; height: 100%; overflow: auto;}
    .left .item{
        height: .88rem;
        line-height: .88rem;
        text-align: center;
        font-size: .24rem;
        border-bottom: 1px solid #fafafa;
        color: rgb(128, 0, 0);
    }
</style>
