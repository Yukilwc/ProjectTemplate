/*
 * @Author: 李文超
 * @Date: 2021-04-12 16:52:42
 * @LastEditors: 李文超
 * @LastEditTime: 2021-04-13 11:12:35
 * @Description: file content
 * @FilePath: \pkuWeb\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import './style/global.scss'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
