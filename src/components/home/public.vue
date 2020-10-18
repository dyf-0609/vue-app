<template>
  <div class="public">
      <div class="header">
          <h1>公开课</h1>
          <span>更多 <img src="/image/youjiantou.svg" alt=""></span>
      </div>
      <div class="list">
          <div class="item">
              <div class="img-bg">
                  <img src="/image/english.png" alt="">
                  <span class="player"><img src="/image/player.png" alt="">20：00</span>
              </div>
              <p class="title">小学英语体验课</p>
              <p class="detail"><span>已报20人</span><span class="free">免费</span></p>
          </div>
          <div class="item">
              <div class="img-bg">
                  <img src="/image/chinese.png" alt="">
                  <span class="player"><img src="/image/player.png" alt="">20：00</span>
              </div>
              <p class="title">小学语文体验课</p>
              <p class="detail"><span>已报20人</span><span class="free">免费</span></p>
          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.public{
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
            display: inline-block;
            .img-bg{
                width: 139px;
                height: 89px;
                margin: 20px 15px 10px 15px;
                 position: relative;
                img{
                    width: 100%;
                    height: 100%;
                }
                .player{
                    position: absolute;
                    right: 0;
                    bottom: 0;
                    width: 77px;
                    height: 20px;
                    border-radius: 25px;
                    background: rgba($color: #000000, $alpha: 0.4);
                    color: #fff;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    img{
                        width: 9px;
                        height: 13px;
                    }
                }
            }
            .title{
                font-size: 14px;
                color: #333;
                margin-left: 30px;
            }
            .detail{
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin: 20px 30px;
                span{
                    font-size: 14px;
                    color: #999;
                }
                .free{
                    color: #ff0000;
                }
            }
        }
    }
}
</style>