import Vue from 'vue'
import Router from 'vue-router'
import fundamental from '@/components/Fundamentals.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Fundamentals',
      component: fundamental
    }
  ]
})
