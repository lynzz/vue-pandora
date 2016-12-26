import Vue from 'vue'
import VueRouter from 'vue-router'
import navView from './nav'

import DemoBlock from './components/demo-block'
import entry from './app'
import routerConfig from './router-config'

import PandoraUI from '../src/index'

Vue.use(VueRouter)
Vue.use(PandoraUI)
Vue.component('nav-view', navView)
Vue.component('demo-block', DemoBlock)

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: routerConfig
})
/*eslint no-new:0*/
new Vue({
  router,
  render: h => h(entry)
}).$mount('#app')
