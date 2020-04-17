// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'lib-flexible/flexible'
import 'vant/lib/index.less'
import { NavBar, DropdownMenu, DropdownItem, Icon, Button, Field,
 Cell, CellGroup, Grid, GridItem, Image, Tab, Tabs, Sticky, Tabbar, TabbarItem } from 'vant';

Vue.config.productionTip = false
//组件按需引入
Vue.use(NavBar).use(DropdownMenu).use(DropdownItem).use(Icon).use(Button)
.use(Field).use(Cell).use(CellGroup).use(Grid).use(GridItem).use(Image)
.use(Tab).use(Tabs).use(Sticky).use(Tabbar).use(TabbarItem);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
