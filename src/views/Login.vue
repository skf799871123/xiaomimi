<template>
    <div>
        <van-nav-bar
            title="登录"
            left-arrow
            @click-left="$router.go(-1)"
        />
        <van-cell-group style="margin-top:15px;">
            <van-field v-model="uname" placeholder="请输入用户名" />
            <van-field v-model="upwd" type="password" placeholder="请输入密码"/>
        </van-cell-group>
        <div style="margin:15px;">
            <van-button @click="login()" color="#f30" square block>登录</van-button>
        </div>
        
    </div>
</template>
<script>
import Cookie from '../assets/js/Cookie.js'
export default {
    data(){
        return {uname:'',upwd:""}
    },
    methods:{
        login(){
            this.$http({
                method:"POST",
                url:"http://www.520mg.com/member/index_login.php",
                data:`fmdo=login&dopost=login&userid=${this.uname}&pwd=${this.upwd}`,
                configs:{withCredentials:true}
            })
            .then(res=>{
                console.log(res.data);
                if(res.data.status==1){
                    this.$notify({ type: 'success', message: res.data.msg });
                    Cookie.setCookie("uname",this.uname);
                    let redirect=this.$route.query.redirect;
                    if(redirect){
                         this.$router.replace(redirect);
                    }else{
                        this.$router.replace("/user");
                    }
                }else{
                    this.$notify({ type: 'danger', message: res.data.msg });
                }
            })
            
            
        }
    }
}
</script>
<style>
    .van-nav-bar .van-icon{
        color: #777 !important;
    }
</style>