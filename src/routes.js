import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home'
import Vendors from './components/Vendors'
import PendingVendor from './components/PendingVendor'
import AddEditVendorTypes from './components/AddEditVendorTypes'
import AddEditAd from './components/AddEditAd'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'home',
    component: Home
  }, {
    path: '/vendor-management',
    name: 'vendor-management',
    component: Vendors
  }, {
    path: '/vendor-management/types/add-edit',
    name: 'addeditvendortypes',
    component: AddEditVendorTypes,
    props: true
  }, {
    path: '/vendor-management/pending',
    name: 'pendingvendor',
    component: PendingVendor,
    props: true
  }, {
    path: '/ad-management',
    name: 'vendors-management',
    component: Vendors
  }, {
    path: '/ad-management/types/add-edit',
    name: 'addeditvendortypes',
    component: AddEditVendorTypes,
    props: true
  }, , {
    path: '/ad-management/locations/add-edit',
    name: 'addeditvendortypes',
    component: AddEditVendorTypes,
    props: true
  }, {
    path: '/ads/add-edit/:id',
    name: 'addeditad',
    component: AddEditAd,
    props: true
  }]
})