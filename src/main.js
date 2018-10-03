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
import Toasted from 'vue-toasted'

const VueUploadComponent = require('vue-upload-component')

const toastedOptions = {
  theme: 'bubble',
  position: 'top-center',
  duration: 5000,
  fullWidth: 'true'
}

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(VueResource)
Vue.use(VueGallery)
Vue.use(Toasted, toastedOptions)
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