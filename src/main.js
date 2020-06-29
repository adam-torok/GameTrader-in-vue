//Imports

import App from './App.vue'
import VueResource from 'vue-resource';
import Vue from 'vue'
import VueRouter from 'vue-router';
import Routes from './routes.js';
import "./assets/css/tailwind.css";

//Using Vue Resource for http get/post

Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueRouter({
  mode:'history',
  routes:Routes
})

//Custom directives

Vue.directive('rainbow-bg',{
  bind(el){
    el.style.background = "#" + Math.random().toString().slice(2,8);
  }
})

//Filters

Vue.filter('cut-size',function(value){
  return value.substring(0,100) + "...";
})

Vue.filter('cut-title-size',function(data){
  return data.substring(0,25)  + "...";
})

//Vue instance

new Vue({
  render: h => h(App),
  router:router
}).$mount('#app')
