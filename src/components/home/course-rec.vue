<template>
  <div class="rec">
      <div class="header">
          <h1>推荐课程</h1>
          <span>更多 <img src="/image/youjiantou.svg" alt=""></span>
      </div>
      <div class="list">
          <div class="item" v-for="(item,index) in list" :key="index">
              <p class="course">{{item.course}}</p>
              <p class="address"><img :src="item.img1" alt=""> <span>{{item.address}}</span> </p>
              <p class="date"><img :src="item.img2" alt=""> <span>{{item.date}}</span></p>
              <p class="time"><img :src="item.img3" alt=""> <span>{{item.time}}</span> </p>
              <p class="price">{{item.price}}</p>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            list:[
                {course:'二年级数学志高秋季班(下)',img1:'/image/dingwei.svg',address:'丰台角门少儿学习中心220教室',img2:'/image/shijian.svg',
                date:'2019/9/30 至 2019/12/26',img3:'/image/naozhong.svg',time:'周一,周四17:00-18:30',price:'￥2340/10课时'},
                {course:'二年级数学志高秋季班(下)',img1:'/image/dingwei.svg',address:'丰台角门少儿学习中心220教室',img2:'/image/shijian.svg',
                date:'2019/9/30 至 2019/12/26',img3:'/image/naozhong.svg',time:'周一,周四17:00-18:30',price:'￥2340/10课时'},
                {course:'二年级数学志高秋季班(下)',img1:'/image/dingwei.svg',address:'丰台角门少儿学习中心220教室',img2:'/image/shijian.svg',
                date:'2019/9/30 至 2019/12/26',img3:'/image/naozhong.svg',time:'周一,周四17:00-18:30',price:'￥2340/10课时'},
                {course:'二年级数学志高秋季班(下)',img1:'/image/dingwei.svg',address:'丰台角门少儿学习中心220教室',img2:'/image/shijian.svg',
                date:'2019/9/30 至 2019/12/26',img3:'/image/naozhong.svg',time:'周一,周四17:00-18:30',price:'￥2340/10课时'},
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.rec{
    width: 100%;
    background-color: #fff;
    margin-bottom: 10px;
    .header{
        height: 50px;
        border-bottom:1Px solid #ccc ;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 5px;
        h1{
            font-size: 16px;
            font-weight: 700;
            line-height: 50px;
            color: #333;
        }
        span{
            font-size: 12px;
            color: #999;
            display: flex;
            justify-content: center;
            align-items: center;
            img{
                width: 15px;
                height: 15px;
            }
        }
    }
    .list{
        width: 100%;
        background-color: #fff;
        .item{
            width: 50%;
            border-right: 1Px solid #ccc;
            border-bottom: 1Px solid #ccc;
            box-sizing: border-box;
            display: inline-block;
            &:nth-of-type(2),&:nth-of-type(4){
                border-right: none;
            }
            .course{
              font-size: 14px;
              color: #333;  
              padding: 10px 5px;
            }
            .address, .date, .time{
                padding: 5px 0px 10px 2px;
                display: flex;
                justify-content: flex-start;
                align-items: center;
                img{
                    width: 15px;
                    height: 17px;
                    margin-right: 2px;
                }
                span{
                    font-size: 12px;
                    color: #999;
                }
            }
            .price{
                padding: 5px 2px;
                font-size: 14px;
                color: #ff0000;
            }
        }
    }
}
</style>