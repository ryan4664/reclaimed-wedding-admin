<template>

  <div>
    <div class="row">
      <div class="col-12">
        <h3>Vendor Management</h3>
        <hr>
      </div>
      <div class="col-4">
        <div class="row">
          <div class="col-12 text-center">
            <h3 class="my-2">Pending Vendors</h3>
          </div>
        </div>
        <pending-vendor-list></pending-vendor-list>
      </div>
      <div class="col-4">
        <div class="row">
          <div class="col-12 text-center">
            <h3 class="my-2">Types</h3>
          </div>
        </div>
        <vendor-type-list></vendor-type-list>
      </div>
      <div class="col-4">
        <div class="row">
          <div class="col-12 text-center">
            <h3 class="my-2">Locations</h3>
          </div>
        </div>
        <!-- <vendor-location-list></vendor-location-list> -->
      </div>
    </div>
    <div class="row">
      <div class="col-4">
        <button class="btn btn-block btn-primary">Create Vendor</button>
      </div>
      <div class="col-4">
        <router-link :to="{name: 'addeditvendortypes'}">
          <button class="btn btn-block btn-primary">Create Type</button>
        </router-link>
      </div>
      <div class="col-4">
        <router-link :to="{name: 'addeditvendorlocations'}">
          <button class="btn btn-block btn-primary">Create Location</button>
        </router-link>
      </div>
    </div>
  </div>

</template>

<script>
import VendorList from "./vendor-list/VendorList.vue";
import VendorTypeList from "./vendor-type-list/VendorTypeList.vue";
// import VendorLocationList from "./vendor-location-list/VendorLocationList.vue";
import PendingVendorList from "./pending-vendor-list/PendingVendorList.vue";

export default {
  components: {
    VendorList,
    VendorTypeList,
    PendingVendorList,
    // VendorLocationList
  },
  name: "vendors",
  data() {
    return {};
  },
  methods: {
    find: function() {}
  }
};
</script>

<style scoped>
</style>
