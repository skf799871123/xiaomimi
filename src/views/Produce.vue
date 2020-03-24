<template>
<div>
    <h1>产品</h1>
    <van-swipe>
        <van-swipe-item v-for="(item,index) in views.goods_info[current].gallery_v3" :key="index">
            <img :src="item.img_url" width="100%"/>
        </van-swipe-item>
    </van-swipe>
</div>
</template>
<script>
export default {
    data(){
        return {
            views:{},
            current:0,//当前商品为第1个子商品
            }
        }, // 当前页面的数据
    created(){
        this.getView();// 当页面创建我们去获取视图数据
    },
    methods:{
        getView(){
            this.$http.get("http://www.520mg.com/mi/product.php?id="+this.$route.params.id)
            .then(res=>{
                console.log(res.data.data);
                this.views  = res.data.data;
            })
        }
    }
}
</script>