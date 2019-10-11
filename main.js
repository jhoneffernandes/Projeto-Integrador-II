import Vue from 'vue'
import Storage from 'vue-ls'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import store from './store'

Vue.config.productionTip = false

Vue.use (Storage)

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
