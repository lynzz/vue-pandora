import Vue from 'vue'
import VueRouter from 'vue-router'

import routerMap from './router'

require('../src/index')

Vue.use(VueRouter)

var router = new VueRouter()

router.map(routerMap)

router.start(Vue.extend({
  components: {
    app: require('./app.vue')
  }
}), 'body')
