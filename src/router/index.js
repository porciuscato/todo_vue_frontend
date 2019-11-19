import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// import Login from '../views/Login.vue'
// 이렇게 안 써도 됨. 다만 일치만 시켜주면 됨
import Login from '../views/Login'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
// 바깥에서도 쓰려면 여기다가 써야함. 
// 자바스크립트는 내가 선택을 꼭 해서 바깥에서도 쓸 수 있게 만들어줘야 함
// 객체들 중에 내가 바깥에서 쓰고 싶은 게 있다면 여기다가 써야 함
