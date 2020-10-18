<template>
  <div class="choose-course">
      <div class="header">
          <div class="left">
              <img src="/image/zuojiantou.svg" alt="" class="zuo" @click="goBackAction">
              <h1>选课中心</h1>
          </div>
          <img src="/image/gouwuche.svg" alt="" class="cart">
      </div>
      <div class="subpage">
          <app-scroll class="content">
            <div class="search">
                <div class="con">
                    <input type="text" placeholder="搜索课程">
                    <img src="/image/sousuo.png" alt="">
                </div>
            </div>
            <div class="nav">
                <div class="item" v-for="(item,index) in nav" :key="index">
                    <div class="title">{{item.title}}</div>
                    <img src="/image/xiajiantou.svg" alt="">
                </div>
            </div>
            <Course :data="course"/>
      </app-scroll>
      </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import Course from './course'
export default {
    components:{
        Course
    },
    data(){
        return{
            nav:[
                {title:'选择年级'},{title:'学科'},{title:'学期'},{title:'筛选'},
            ]
        }
    },
    methods:{
        goBackAction(){
            this.$router.back();
        },
    },
    computed:{
        ...mapState({
            course:state=>state.home.course,
        })
    },
    created(){
        this.$store.dispatch("home/requestCourse")
    }
}
</script>

<style lang="scss" scoped>
.subpage{
    width: 100%;
    position: absolute;
    top: 40px;
    left: 0;
    bottom: 0;
}
.choose-course{
    position: absolute;
    top: 0;left: 0;bottom: -49px;
    width: 100%;
    background-color: #F2F2F2;
    .header{
        padding:0 5px;
        height: 40px;
        background-color: #FFF;
        display: flex;
        justify-content: space-between;
        align-items: center;
        img{
            width: 25px;
            height: 25px;
        }
        .left{
            display: flex;
            justify-content: space-between;
            align-items: center;
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
    }
    .search{
        width: 100%;
        height: 36px;
        border-top: 1Px solid #ccc;
        border-bottom: 1Px solid #ccc;
        background-color: #fff;
        margin: 10px 0;
        .con{
            width: 284px;
            height: 36px;
            border: 1Px solid #ccc;
            border-top: none;
            border-bottom: none;
            border-radius: 25px;
            margin-left: 25px;
            position: relative;
        }
        input{
            width: 230px;
            height: 32px;
            border: none;
            text-align: center;
            font-size: 13px;
            color: #ccc;
            margin-left: 40px;
        }
        img{
            width: 16px;
            height: 16px;
            position: absolute;
            top: 10px;left:20px;
        }
    }
    .nav{
        width: 100%;
        height: 44px;
        border-top: 1PX solid #ccc;
        border-bottom: 1PX solid #ccc;
        display: flex;
        align-items: center;
        background-color: #fff;
        .item{
            flex: 1;
            height: 44px;
            display: flex;
            justify-content: center;
            align-items: center;
            border-right: 1Px solid #ccc;
            .title{
                font-size: 13px;
                color: #333;
            }
            img{
                width: 15px;
                height: 15px;
            }
            &:last-of-type{
                border-right: none;
            }
        }
    }
}
</style>