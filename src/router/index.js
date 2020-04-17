import Vue from 'vue'
import Router from 'vue-router'
import Index  from '../pages/index'
import Credit from '../pages/credit'
import QueryCredit from '../pages/creditQuery'
import Login  from '../pages/login'
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/credit',
      name: 'Credit',
      component: Credit
    },
    {
      path: '/queryCredit',
      name: 'QueryCredit',
      component: QueryCredit
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})
