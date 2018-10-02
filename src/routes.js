import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home'
import Vendors from './components/Vendors'
import Ads from './components/Ads'
import PendingVendor from './components/PendingVendor'
import AddEditVendorTypes from './components/AddEditVendorTypes'
import AddEditAdTypes from './components/AddEditAdTypes'
import AddEditAdLocations from './components/AddEditAdLocations'
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
    path: '/vendors/pending',
    name: 'pendingvendor',
    component: PendingVendor,
    props: true
  }, {
    path: '/ad-management',
    name: 'ad-management',
    component: Ads
  }, {
    path: '/ad-management/locations/add-edit',
    name: 'addeditadlocations',
    component: AddEditAdLocations,
    props: true
  }, {
    path: '/ad-management/types/add-edit',
    name: 'addeditadtypes',
    component: AddEditAdTypes,
    props: true
  }, {
    path: '/ads/add-edit/:id',
    name: 'addeditad',
    component: AddEditAd,
    props: true
  }]
})
