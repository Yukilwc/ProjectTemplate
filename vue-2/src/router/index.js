/*
 * @Author: 李文超
 * @Date: 2021-04-12 16:52:42
 * @LastEditors: 李文超
 * @LastEditTime: 2021-04-13 10:38:09
 * @Description: file content
 * @FilePath: \pkuWeb\src\router\index.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../pages/main.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
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
