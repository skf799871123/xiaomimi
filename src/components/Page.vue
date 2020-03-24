<template>
    <div>
        <!-- 数据结构解释
        sections 是一个数组 section数组的一项
        section.body.items  items环锭篇每一项数据
        width:item.w/100+'rem'  w是720像素单位  转换为rem/100
         -->
        <div v-for="(section,index) in sections" :key="index">
            <div v-if="section.view_type=='gallery'">
                <van-swipe>
                    <van-swipe-item v-for="(item,ind) in section.body.items" :key="ind">
                        <img :src="item.img_url" :style="{width:item.w/100+'rem',height:item.h/100+'rem'}" alt="">
                    </van-swipe-item>
                </van-swipe>   
            </div>

             <div 
            v-if="section.view_type=='cells_auto_fill'" 
            :style="{position:'relative',width:section.body.w/100+'rem',height:section.body.h/100+'rem'}">
            <!-- 设置父元素的宽高  section.body.w通过查看数据结构了解 -->
                <div 
                v-for="(item,ind) in section.body.items" :key="ind"
                :style="{position:'absolute',width:item.w/100+'rem',height:item.h/100+'rem',
                left:item.x?item.x/100+'rem':0,top:item.y?item.y/100+'rem':0}"
                >
                <img :src="item.img_url" width="100%" alt="">
                </div>
            </div>
            <div v-if="section.view_type=='divider_line'"
            :style="{height:section.body.line_height/100+'rem','background-color':section.body.line_color}">
            </div>
            <!-- 分割线 -->
            <div v-if="section.view_type=='list_three_type4'" class="row" style="padding:.2rem;">
                <div v-for="(item,ind) in section.body.items" :key="ind" class="col"
                :style="{'margin-left':ind==1?'.2rem':0,'margin-right':ind==1?'.2rem':0,}"
                >
                    <img :src="item.img_url" width="100%" alt="">
                    <p>{{item.product_id}}</p>
                    <h5>{{item.product_name_}}</h5>
                    <p>{{item.product_brief}}</p>
                    <p>{{item.product_price}}</p>
                    <p>{{item.product_org_price}}</p>
                </div>
            </div>
            <!-- 一行三个 -->
            <div v-if="section.view_type=='list_two_type13'" class="row" style="padding:.2rem;">
                <div v-for="(item,ind) in section.body.items" :key="ind" class="col tac"
                :style="{'margin-left':ind==1?'.2rem':0}">
                    <img :src="item.img_url" width="100%" alt="">
                    <h4>{{item.product_name_}}</h4>
                    <p>{{item.product_id}}</p>
                    <p>{{item.product_brief}}</p>
                    <p>{{item.product_price}}</p>
                    <p>{{item.product_org_price}}</p>
                    <van-button :color="section.body.btn_color" :btn_txt_color="section.body.btn_txt_color"
                    size="small" :text="item.btn_txt?item.btn_txt:'立即购买'"
                    ></van-button>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
    .row{display: flex;}
    .col{flex: 1;}
    .tac{text-align: center;}
</style>
<script>
export default {
    props:["item"],
    data(){return {sections:[]}},
    created(){
        this.getSections();
    },
    methods:{
        getSections(){
            this.$http.get(`/mi/page.php?page_id=${this.item.page_id}&page_type=${this.item.page_type}`)
            .then(res=>{
                this.sections=res.data.data.data.sections;
            })
            .catch(res=>{
                console.log(err);
            })
        }
    }
}
</script>
