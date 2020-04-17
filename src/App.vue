<!-- 展示模板 -->
<template>
  <div id="app">
     <router-view></router-view>
  </div>

</template>

<script>
// 导入组件
import Index from './pages/index'

export default {
  name: 'app',
  components: {
    Index
  }
}
</script>
<!-- 样式代码 -->
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
