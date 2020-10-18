<template>
  <div class="handle">
      <div class="item" @click="goChooseCourseAction">
          <img src="/image/xuanke.svg" alt="">
          <span>选课中心</span>
      </div>
      <div class="item">
          <img src="/image/gongkaike.svg" alt="">
          <span>公开课</span>
      </div>
      <div class="item">
          <img src="/image/remen.svg" alt="">
          <span>热门活动</span>
      </div>
      <div class="item">
          <img src="/image/dingwei.svg" alt="">
          <span>全部校区</span>
      </div>
  </div>
</template>

<script>
export default {
    methods:{
        goChooseCourseAction(){
            this.$router.push({name:'choose-course'})
        }
    }
}
</script>

<style lang="scss" scoped>
.handle{
    width: 100%;
    height: 137px;
    margin: 10px 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #fff;
    .item{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        img{
            width: 35px;
            height: 35px;
        }
        span{
            font-size: 14px;
            color: #333;
        }
    }
}
</style>