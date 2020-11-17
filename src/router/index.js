import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = ()=> import("views/home/Home")
const Cart = ()=> import("views/cart/Cart")
const Category = ()=> import("views/category/Category")
const Profile = ()=> import("views/profile/Profile")
const Details = ()=> import ("views/details/Details")

// 1.安装插件
Vue.use(VueRouter)

// 2.创建router
const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/category',
    component: Category
  },
  {
    name:"/details",
    path: '/details',
    component: Details
  },
  
]
const router = new VueRouter({
  routes,
  mode: 'history'
})


export default router
