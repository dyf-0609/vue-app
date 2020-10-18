<template>
  <div class="rec">
      <div class="header">
          <h1>名师推荐</h1>
          <span>更多 <img src="/image/youjiantou.svg" alt=""></span>
      </div>
      <app-scroll  :scrollX="true" :scrollY="false" :width="wrapWidth">
      <ul class="list"  ref="wrap">
          <li class="item" v-for="(item,index) in list" :key="index" >
            <img :src="item.img" alt="">
            <span>{{item.name}}</span>
            <span>{{item.teacher}}</span>
          </li>
      </ul>
    </app-scroll>
  </div>
</template>

<script>
export default {
    data(){
        return{
            list:[
                {img:'/image/zhangqi.png',name:'张奇',teacher:'小学数学老师'},
                {img:'/image/wangdan.png',name:'王丹',teacher:'小学语文老师'},
                {img:'/image/lishuo.png',name:'李烁',teacher:'小学语文老师'},
                {img:'/image/wangdan.png',name:'赵丽云',teacher:'小学语文老师'},
                {img:'/image/liuli.png',name:'刘丽',teacher:'初中物理老师'},
                {img:'/image/tom.png',name:'Tom',teacher:'初中英语老师'},
                {img:'/image/liuli.png',name:'赵芸',teacher:'初中物理老师'},
            ],
            wrapWidth:0,
        }
    },
    watch:{
        data:{
            handler(newVal){
                this.$nextTick(()=>{
                this.wrapWidth=this.$refs.wrap.offsetWidth;
                });    
            },
            immediate:true,  
        },  
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
        white-space: nowrap;
        overflow: hidden;
        width: max-content;
        .item{
            float: left;
            padding: 20px;
            img{
                width: 87px;
                height: 89px;
            }
            span{
                display: block;
                text-align: center;
                line-height: 20px;
                font-size: 12px;
                color: #333;
                &:first-of-type{
                    font-size: 14px;
                    color: #000;
                    font-weight: bold;
                }
            }
        }
    }
}
</style>