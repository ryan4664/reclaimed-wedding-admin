<template>

  <div>
    <div class="row">
      <div class="col-12">
        <h3>Ad Management</h3>
        <hr>
      </div>
      <div class="col-6">
        <div class="row">
          <div class="col-12 text-center">
            <h3 class="my-2">Pending Vendors</h3>
          </div>
        </div>
        <!-- <pending-vendor-list></pending-vendor-list> -->
      </div>
      <div class="col-6">
        <div class="row">
          <div class="col-12 text-center">
            <h3 class="my-2">Vendor Types</h3>
          </div>
        </div>
        <!-- <vendor-type-list></vendor-type-list> -->
      </div>
    </div>
    <div class="row">
      <div class="col-6">
        <button class="btn btn-block btn-primary">Create Vendor</button>
      </div>
      <div class="col-6">
        <router-link :to="{name: 'addeditvendortypes'}">
          <button class="btn btn-block btn-primary">Create Vendor Type</button>
        </router-link>
      </div>
    </div>
  </div>

</template>

<script>
// import VendorList from "./vendor-list/VendorList.vue";
// import VendorTypeList from "./vendor-type-list/VendorTypeList.vue";
// import PendingVendorList from "./pending-vendor-list/PendingVendorList.vue";

export default {
  components: {
    // VendorList,
    // VendorTypeList,
    // PendingVendorList
  },
  name: "ads",
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
