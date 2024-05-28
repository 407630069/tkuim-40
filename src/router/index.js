import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    // component: HomeView
    component: () => import(/* webpackChunkName: "about" */ '../views/LogoView.vue')
  }
  ,
  {
    path: '/home1',
    name: 'home1',
    component: HomeView
  }
  ,
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
  ,
  {
    path: '/seating',
    name: 'seating',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/SeatingView.vue')
  }
  ,
  {
    path: '/LogoView',
    name: 'LogoView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/LogoView.vue')
    
  }
  ,
  {
    path: '/OtherView',
    name: 'OtherView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/OtherView.vue')
  }
  ,
  {
    path: '/InviteView',
    name: 'InviteView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/InviteView.vue')
  }
  ,
  {
    path: '/DonationView',
    name: 'DonationView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/DonationView.vue')
  }

  ,
  {
    path: '/ScheduleView',
    name: 'ScheduleView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ScheduleView.vue')
  }
  ,
  {
    path: '/ScheduleView_copy',
    name: 'ScheduleView_copy',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ScheduleView_copy.vue')
  }
  ,
  {
    path: '/DonateListView',
    name: 'DonateListView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/DonateListView.vue')
  }
  ,
  {
    path: '/UploadImg',
    name: 'UploadImg',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/UploadImg.vue')
  }

  ,
  {
    path: '/InviteView2',
    name: 'InviteView2',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/InviteView2.vue')
  }
  ,
  {
    path: '/InviteViewCopy',
    name: 'InviteViewCopy',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/InviteViewCopy.vue')
  }
  ,
  {
    path: '/InviteViewVer3',
    name: 'InviteViewVer3',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/InviteViewVer3.vue')
  }
  

  ///LogoView
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      // 如果有保存的位置信息，则滚动到该位置
      return savedPosition;
    } else {
      // 否则滚动到页面顶部
      return { top: 0 };
    }
  }
})

export default router
