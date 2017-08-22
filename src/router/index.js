import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

import Main from '@/main.vue'
import Tabletest from '@/components/tabletest'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'tabletest',
      component: Tabletest
    },
    {
      path: '/main',
      name: 'main',
      component: Main
    }
  ]
})
