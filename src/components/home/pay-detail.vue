<template>
  <div class="pay-detail">
      <div class="header">
         <img src="/image/zuojiantou.svg" alt="" class="zuo" @click="goBackAction">
         <h1>订单详情</h1>
      </div>
      <div class="study">
          <img src="/image/biao.png" alt=""> 学习中
          <span>剩余 : {{item.quota}}节课</span>
      </div>
      <div class="course-detail">
          <div class="title">
              <span class="name">{{item.grade}}{{item.course_name}}</span>
              <span class="price">￥{{item.price}}/{{item.quota}}课时</span>
          </div>
          <p class="address"><img src="/image/dingwei.svg" alt=""> <span>丰台角门少儿学习中心220教室</span> </p>
          <p class="date"><img src="/image/shijian.svg" alt=""> <span>{{item.course_date.start}} 至 {{item.course_date.end}}</span></p>
          <p class="time"><img src="/image/naozhong.svg" alt=""> <span>周一,周四17:00-18:30</span> </p>
      </div>
      <p class="total">
          <span class="t-left">实付</span>
          <span class="t-right">￥{{item.price}}</span>
      </p>
      <p class="order-id">订单编号：{{item._id}}</p>
      <p class="methods">支付方式：支付宝</p>
      <p class="order-time">下单时间：2020-10-18 12：00：00</p>
      <p class="order-time">付款时间：2020-10-18 12：00：00</p>
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
.pay-detail{
    position: absolute;
    top: 0;left: 0;bottom: -49px;
    width: 100%;
    background-color: #Fff;
    .header{
        padding:0 5px;
        height: 40px;
        background-color: #FFF;
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
    .study{
        height: 75px;
        background-color: #108ee9;
        color: #fff;
        font-size: 14px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding:0 20px;
        img{
            width: 20px;
            height: 20px;
            margin-right: 10px;
        }
        span{
            margin-left: 50px;
        }
    }
    .course-detail{
        padding: 30px 0px;
        .title{
            padding: 0 20px;
            line-height: 50px;
            span{
                display: inline-block;
            }
            .name{
                font-size: 16px;
                color: #333;
                margin-right: 40px;
            }
            .price{
                font-size: 13px;
                color: #ff0000;
            }
        }
        .address, .date, .time{
            line-height: 30px;
            padding: 0 20px;
            display: flex;
            align-items: center;
            img{
                width: 15px;
                height: 15px;
                margin-right: 5px;
            }
            span{
                font-size: 14px;
                color: #999;
            }
        }
    }
    p{
        font-size:14px;
        color:#000;
        line-height: 60px;
        padding: 0 20px;
    }
    .total{
        .t-right{
            color: #ff0000;
            margin-left: 200px;
        }
    }
}
</style>