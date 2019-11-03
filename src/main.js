// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//vuex
import Vuex from 'vuex'//导入（vuex）包
Vue.use(Vuex)		//注册vuex到vue中

var store=new Vuex.Store({
  state:{
    timer:0,
    setTime:0,
    tatalTime:0,
    mainTimeid:0
  },
  mutations:{
    sum(state){
      state.tatalTime=state.timer+state.setTime
    }
  }
})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
})
