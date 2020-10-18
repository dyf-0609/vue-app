<template>
  <div class="order">
      <div class="header">
         <img src="/image/zuojiantou.svg" alt="" class="zuo" @click="goBackAction">
         <h1>订单结算</h1>
      </div>
      <div class="user">
          <p>会员名称：小小</p>
          <p>用户手机号：18835691234</p>
      </div>
      <div class="course">
          <div class="title">
              <span class="name">{{item.grade}}{{item.course_name}}</span>
              <span class="price">￥{{item.price}}/{{item.quota}}课时</span>
          </div>
          <p class="address"><img src="/image/dingwei.svg" alt=""> <span>丰台角门少儿学习中心220教室</span> </p>
          <p class="date"><img src="/image/shijian.svg" alt=""> <span>{{item.course_date.start}} 至 {{item.course_date.end}}</span></p>
          <p class="time"><img src="/image/naozhong.svg" alt=""> <span>周一,周四17:00-18:30</span> </p>
      </div>
      <div class="total">
          <span class="t-left">共需支付</span>
          <span class="t-right">￥{{item.price}}</span>
      </div>
      <div class="methods">
          <p>选择支付方式</p>
          <div class="alipay">
              <div class="left">
                    <img src="/image/zhifubao.png" alt="">
                    <span>支付宝支付</span>
              </div>
              <img src="/image/yixuan.svg" alt="">
          </div>
          <div class="alipay">
              <div class="left">
                    <img src="/image/weixin.png" alt="">
                    <span>微信支付</span>
              </div>
              <img src="/image/weixuan.svg" alt="">
          </div>
      </div>
      <div class="bottom">
          <span class="money">￥{{item.price}}</span>
          <span class="btn" @click="submitAtion(item._id)">提交订单</span>
      </div>
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
        courseList(){
            const item =this.course.filter((item)=>{
                return item._id===this.$route.query.id
            })
            this.item=item[0];
        },
        submitAtion(id){
            this.$router.push({path:'/home-page/pay-ok',query:{id}})
        }
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
.order{
    position: absolute;
    top: 0;left: 0;bottom: -49px;
    width: 100%;
    background-color: #Fff;
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
    .user{
        width: 100%;
        border-bottom: 1Px solid #ccc;
        p{
            padding:0 20px ;
            line-height: 30px;
            font-size: 14px;
            color: #333;
        }
    }
    .course{
        width: 100%;
        padding-bottom: 10px;
        border-bottom: 1Px solid #ccc;
        .title{
            padding: 0 20px;
            line-height: 50px;
            span{
                display: inline-block;
            }
            .name{
                font-size: 14px;
                color: #333;
                margin-right: 40px;
            }
            .price{
                font-size: 13px;
                color: #ff0000;
            }
        }
        .address, .date, .time{
            line-height: 25px;
            padding: 0 20px;
            display: flex;
            align-items: center;
            img{
                width: 15px;
                height: 15px;
                margin-right: 5px;
            }
            span{
                font-size: 12px;
                color: #999;
            }
        }
    }
    .total{
        padding: 0 40px 0 20px;
        border-bottom: 1Px solid #ccc;
        line-height: 50px;
        display: flex;
        justify-content: space-between;
        span{
            font-size: 13px;
            color: #000;
        }
        .t-right{
            font-size: 14px;
            color: #ff0000;
        }
    }
    .methods{
        width: 100%;
        p{
            padding: 25px 20px;
            font-size: 14px;
            color: #000;
        }
        .alipay{
            padding:10px 20px;
            border-bottom: 1Px solid #ccc;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .left{
                display: flex;
                justify-content: flex-start;
                align-items: center;
                img{
                    width: 32px;
                    height: 30px;
                    margin-right: 10px;
                }
                span{
                    font-size: 13px;
                    color: #000;  
                }
            }
            img{
                width: 25px;
                height: 25px;
            }
        }
    }
    .bottom{
        position: absolute;
        left: 0;bottom: 0;
        width: 100%;
        height: 80px;
        display: flex;
        align-items: center;
        border-top: 1Px solid #ccc;
        .money{
            font-size: 14px;
            color: #ff0000;
            font-weight: bold;
            border-right: 1Px solid #ccc;
            width: 50%;
            line-height: 80px;
            text-align: center;
        }
        .btn{
            background-color:#108ee9 ;
            font-size: 16px;
            color: #fff;
            width: 50%;
            line-height: 80px;
            text-align: center;
        }
    }
}
</style>