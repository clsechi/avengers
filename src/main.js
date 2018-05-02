import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import { routes } from './routes';
import Vuex from 'vuex'
import { modules } from '../store/index'

Vue.use(Vuex)
Vue.use(VueResource);
Vue.use(VueRouter);

const store = new Vuex.Store({
  modules,
});

const router = new VueRouter({
  routes,
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
