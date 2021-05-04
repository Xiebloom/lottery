import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Model from '../components/Model.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children : [
      {
        path: '/model',
        component:Model
      }
    ]
  },

]

const router = new VueRouter({
  routes
})

export default router
