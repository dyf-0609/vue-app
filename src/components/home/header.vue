<template>
    <div class="header">
        <img src="/image/dingwei.svg" alt="" class="dingwei" />
        <span>海淀校区 <img src="/image/xiajiantou.svg" alt="" class="xia" /></span>
        <div class="right">
            <input type="text" placeholder="搜索课程" class="search" />
            <img src="/image/sousuo.png" alt="" class="sou" />
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.header{
width: 100%;
height: 40px;
display: flex;
justify-content: space-around;
align-items: center;
background-color: #fff;
.dingwei{
    width: 20px;
    height: 20px;
}
span{
    color: #333;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .xia{
    width: 16px;
    height: 16px;
    }
}
.right{
    position: relative;
}
.search{
    width: 260px;
    height: 20px;
    padding: 8px 0;
    border-radius: 25px;
    border: 1px solid #ddd;
    text-align: center;
    font-size: 13px;
    color: #ddd;
}
.sou{
    width: 16px;
    height: 16px;
    position: absolute;
    left: 25px;
    top: 12px;
    }
}
</style>