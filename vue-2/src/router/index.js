/*
 * @Author: 李文超
 * @Date: 2021-04-12 16:52:42
 * @LastEditors: 李文超
 * @LastEditTime: 2021-04-15 11:53:21
 * @Description: file content
 * @FilePath: \library\通用库\ProjectTemplate\vue-2\src\router\index.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../pages/main.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Main
  },
  {
    path: '/Main',
    name: 'main',
    component: Main
  }
]

const router = new VueRouter({
  scrollBehavior: () => ({
    y: 0
  }),
  routes
})

export default router
