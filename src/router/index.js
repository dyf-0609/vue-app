import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: ()=> import(/* webpackChunkName:"home" */ '../views/Home'),
    redirect:'/home-page',
    children:[
     {
      path:'home-page',
      name:'home-page',
      component:()=>import(/* webpackChunkName:"home" */ '../views/HomePage'),
      children:[
        {
          path:'choose-course',
          name:'choose-course',
          component:()=>import(/* webpackChunkName:"home" */ '../components/home/choose-course'),
        },
        {
          path:'order',
          name:'order',
          component:()=>import(/* webpackChunkName:"home" */ '../components/home/order'),
        },
        {
          path:'pay-ok',
          name:'pay-ok',
          component:()=>import(/* webpackChunkName:"home" */ '../components/home/pay-ok'),
        },
        {
          path:'pay-detail',
          name:'pay-detail',
          component:()=>import(/* webpackChunkName:"home" */ '../components/home/pay-detail'),
        }
      ]
     },
     {
      path:'news',
      name:'news',
      component:()=>import(/* webpackChunkName:"home" */ '../views/News')
     },
     {
      path:'message',
      name:'message',
      component:()=>import(/* webpackChunkName:"home" */ '../views/Message')
     },
     {
      path:'my',
      name:'my',
      component:()=>import(/* webpackChunkName:"home" */ '../views/My')
     },
    ]
  },
  {
    path:'**',
    redirect:'/home-page'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
