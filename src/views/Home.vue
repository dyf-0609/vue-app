<template>
  <div id="home">
      <nav class="menu">
          <router-link to="/home-page" class="item">
              <span class="iconfont iconshouye"></span>
              <span>首页</span>
          </router-link>
          <router-link to="/news" class="item">
              <span class="iconfont iconzixun"></span>
              <span>资讯</span>
          </router-link>
          <router-link to="/message" class="item">
              <span class="iconfont iconxiaoxi"></span>
              <span>消息</span>
          </router-link>
          <router-link to="/my" class="item">
              <span class="iconfont iconwode"></span>
              <span>我的</span>
          </router-link>
      </nav>
      
      <router-view/>
      
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

.menu{
    width: 100%;
    height: 49px;
    box-sizing: border-box;
    position: absolute;
    left: 0;bottom: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #fff;
    .item{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        span{
            color: #333;
        }
        .iconfont{
            font-size: 20px;
        }
        &.router-link-active{
            span{color: #108EE9;}
        }
    }
}
</style>