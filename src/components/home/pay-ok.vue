<template>
  <div class="pay-ok">
     <div class="header">
         <img src="/image/zuojiantou.svg" alt="" class="zuo" @click="goBackAction">
         <h1>支付成功</h1>
      </div>
      <div class="img">
        <img src="/image/zhifucg.png" alt="">
        <span>支付成功</span>
      </div>
      <button class="order" @click="goPayDetailAction(item._id)">查看订单</button>
      <button class="back" @click="goBackHomeAction">返回首页</button>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    data(){
        return{
            item:{}
        }
    },
  methods:{
    goBackAction(){
        this.$router.back();
    },
    goPayDetailAction(id){
       this.$router.push({path:'/home-page/pay-detail',query:{id}})
    },
    goBackHomeAction(){
      this.$router.push("/");
    },
    courseList(){
            const item =this.course.filter((item)=>{
                return item._id===this.$route.query.id
            })
            this.item=item[0];
        },
  },
  watch:{
        course:{
            handler(n){
                if(n[0]){
                    this.courseList()
                }
            },
            immediate: true,
        }
    },
    computed:{
        ...mapState({
            course:state=>state.home.course,
        })
    },
    created(){
        this.$store.dispatch("home/requestCourse",{id: this.$route.query._id})
    }
}
</script>

<style lang="scss" scoped>
.pay-ok{
  position: absolute;
  top: 0;left: 0;bottom: -49px;
  width: 100%;
  background-color: #Fff;
  text-align: center;
  .header{
        padding:0 5px;
        height: 40px;
        background-color: #FFF;
        margin-bottom: 10px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        border-bottom: 1Px solid #ccc;
        .zuo{
            width: 20px;
            height: 30px;
            margin-right: 10px;
        }
        h1{
            font-size: 18px;
            font-weight: bold;
        }
  }
  .img{
    width: 100%;
    height: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    img{
      width: 75px;
      height: 68px;
    }
    span{
      font-size: 20px;
      color: #333;
    }
  }
  button{
    width: 298px;
    height: 44px;
    text-align: center;
    border: none;
    border-radius: 5px;
    margin-top: 20px;
    font-size: 16px;
  }
  .order{
    background-color: #108ee9;
    color: #fff;
  }
  .back{
    border: 1Px solid #108ee9;
    background-color: #fff;
    color: #108ee9;
  }
}
</style>