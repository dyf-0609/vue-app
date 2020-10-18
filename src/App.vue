<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
html,body{
  width: 100%;
  height: 100%;
  touch-action: none;
  background-color:#F2F2F2;
}
.page{
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 49px;
}
.content{
     width: 100%;
     height: 100%;
     overflow: hidden;  
     touch-action: none; 
}
</style>
