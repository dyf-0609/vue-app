<template>
  <div class="banner">
    <div class="swiper-container" ref="swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item, index) in list" :key="index">
          <img :src="item.path" alt="banner" />
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper/swiper-bundle.js";
import "swiper/swiper-bundle.css";
export default {
  data() {
    return {
      list: [
        { path: "/image/01.png" },
        { path: "/image/02.png" },
        { path: "/image/03.png" },
        { path: "/image/04.png" },
      ],
    };
  },
  mounted(){
        this.$nextTick(() => {
        this.swiper = new Swiper(this.$refs.swiper, {
          pagination: {
            el: ".swiper-pagination",
          },
          loop: true,
          autoplay: {
            delay: 3000,
            disableOnInteraction: false,
          },
        });
      });
    },
};
</script>

<style lang="scss" scoped>
.banner,
.swiper-container,
.swiper-wrapper,
.swiper-slide {
  width: 100%;
  height: 186px;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
<style lang="scss">
.swiper-pagination-bullet {
  width: 8px;
  height: 8px;
}
.swiper-pagination-bullet.swiper-pagination-bullet-active {
  background: #fff;
}
</style>