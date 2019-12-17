import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'

import ElementUI from 'element-ui'

import Portal from './components/portal/Portal'

/* eslint-disable no-extend-native */
Date.prototype.format = function(fmt) {
  let o = {
    'M+': this.getMonth() + 1,
    'd+': this.getDate(),
    'h+': this.getHours(),
    'm+': this.getMinutes(),
    's+': this.getSeconds(),
    'S+': this.getMilliseconds()
  }
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  for (let k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : ('00' + o[k]).substr(String(o[k]).length))
    }
  }
  return fmt
}

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(ElementUI)

const routes = [{ path: '/portal', component: Portal }]

const router = new VueRouter({
  routes
})

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
