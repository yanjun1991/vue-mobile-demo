<template>
   <van-tabbar route v-model="footerActive" inactive-color="gray" active-color="blue">
     <van-tabbar-item name="home" to="/" icon="home-o">首页</van-tabbar-item>
     <van-tabbar-item name="exam" icon="search">考试及问卷</van-tabbar-item>
     <van-tabbar-item name="credit" to="/queryCredit" icon="friends-o">业绩查询</van-tabbar-item>
     <van-tabbar-item name="my" icon="setting-o">我的</van-tabbar-item>
   </van-tabbar>
</template>

<script >

export default {
  name: 'Footer',
  data () {
    return {
      footerActive: 0
    }
  }
}
</script>

<style>
.isActive{
  color: hotpink;
}
</style>
