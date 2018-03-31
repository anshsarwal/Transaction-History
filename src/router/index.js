import Vue from 'vue'
import Router from 'vue-router'
import transacthistory from '@/components/transacthistory'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'transacthistory',
      component: transacthistory
    },
  ]
})
