import Vue from 'vue'
import App from './App'
import router from './routes.js'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueResource from 'vue-resource'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
import VueGallery from 'vue-gallery'
import './assets/custom.css'
const VueUploadComponent = require('vue-upload-component')

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(VueResource)
Vue.use(VueGallery)
Vue.component('icon', Icon)
Vue.component('file-upload', VueUploadComponent)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App,
    Icon
  }
})