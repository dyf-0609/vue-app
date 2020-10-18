<template>
  <div class="course" >
      <div class="list" v-for="(item,index) in data" :key="index">
          <div class="item">
              <p class="course">{{item.grade}}{{item.course_name}}</p>
              <p class="address"><img src="/image/dingwei.svg" alt=""> <span>丰台角门少儿学习中心220教室</span> </p>
              <p class="date"><img src="/image/shijian.svg" alt=""> <span>{{item.course_date.start}} 至 {{item.course_date.end}}</span></p>
              <p class="time"><img src="/image/naozhong.svg" alt=""> <span>周一,周四17:00-18:30</span> </p>
              <div class="buy">
                  <span class="price">￥{{item.price}}/{{item.quota}}课时</span>
                  <img src="/image/gouwuche.svg" alt="">
                  <button class="btn" @click="goOrderAction(item._id)">立即购买</button>
              </div>
          </div>
      </div>
  </div>
</template>

<script>

export default {
    props:{
        data:Array
    },
    methods:{
        goOrderAction(id){
            this.$router.push({path:'/home-page/order',query:{id}})
        }
    }
}
</script>

<style lang="scss" scoped>
.course{
    width: 100%;
    .list{
        width: 100%;
        .item{
            padding-top: 10px ;
            border-top: 1Px solid #ccc;
            border-bottom: 1Px solid #ccc;
            margin-bottom: 10px;
            background-color: #fff;
            .course{
                padding: 0 10px ;
                font-size: 14px;
                color: #333;
                line-height: 30px;
            }
            .address, .date, .time{
                padding: 0 10px ;
                line-height: 25px;
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
            .buy{
                padding: 0 15px;
                height: 40px;
                line-height: 40px;
                border-top: 1Px solid #ccc;
                display: flex;
                align-items: center;
                .price{
                    font-size: 14px;
                    color: #ff0000;
                    float: left;
                }
                img{
                    width: 25px;
                    height: 25px;
                    float: left;
                    margin-left: 130px;
                }
                .btn{
                    width: 64px;
                    height: 30px;
                    border: none;
                    border-radius: 5px;
                    background-color: #108ee9;
                    color: #fff;
                    font-size: 13px;
                    float: left;
                    margin-left: 20px;
                }
            }
        }
    }
}
</style>