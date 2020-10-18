<template>
  <div class="news">
      <div class="header">
          <h1>资讯</h1>
          <span>更多 <img src="/image/youjiantou.svg" alt=""></span>
      </div>
      <div class="list">
          <div class="item" v-for="(item,index) in list" :key="index">
              <img :src="item.img1" alt="">
              <div class="text">
                  <p class="title">{{item.title}}</p>
              <p class="tips"><span>{{item.time}}</span><span><img :src="item.img2" alt="">{{item.count}}</span></p>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            list:[
                {img1:'/image/news1.png',title:'义务教育改革 提了哪些新要求',time:'11分钟前',img2:'/image/yanjing.svg',count:'1000'},
                {img1:'/image/news2.png',title:'孩子写作业磨蹭，家长应该如何应对?',time:'11分钟前',img2:'/image/yanjing.svg',count:'1000'},
                {img1:'/image/news3.png',title:'儿童成长中悲剧频频发生 监护人需负重要责任',time:'11分钟前',img2:'/image/yanjing.svg',count:'1000'},
                {img1:'/image/news4.png',title:'解决二孩入园难应强化政府“兜底”',time:'11分钟前',img2:'/image/yanjing.svg',count:'1000'},
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.news{
    width: 100%;
    background-color: #fff;
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
            padding: 20px 10px;
            overflow: hidden;
            border-bottom:1Px solid #ccc ;
            img{
                width: 120px;
                height: 90px;
                margin-right: 20px;
                float: left;
            }
            .text{
                float: left;
            }
            .title{
                width: 210px;
                font-size: 13px;
                color: #333;
                margin-top: 10px;
                white-space: normal;
                line-height: 20px;
            }
            .tips{
                margin-top: 50px;
                padding-right: 30%;
                display: flex;
                justify-content: space-between;
                align-items: center;
                span{
                    color: #999;
                    font-size: 12px;
                }
                img{
                    width: 15px;
                    height: 15px;
                    margin: 0;
                }
            }
        }
    }
}
</style>