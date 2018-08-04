import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home'
import Vendors from './components/Vendors'
import AddEditVendorTypes from './components/AddEditVendorTypes'
import AddEditAd from './components/AddEditAd'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'home',
    component: Home
  }, {
    path: '/vendors',
    name: 'vendors',
    component: Vendors
  }, {
    path: '/vendors/types/add-edit',
    name: 'addeditvendortypes',
    component: AddEditVendorTypes
  }, {
    path: '/ads/add-edit/:id',
    name: 'addeditad',
    component: AddEditAd,
    props: true
  }]
})
