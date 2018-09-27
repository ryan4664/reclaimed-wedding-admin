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
            <h3 class="my-2">Types</h3>
          </div>
        </div>
        <!-- <ad-type-list></ad-type-list> -->
      </div>
      <div class="col-6">
        <div class="row">
          <div class="col-12 text-center">
            <h3 class="my-2">Locations</h3>
          </div>
        </div>
        <ad-location-list></ad-location-list>
      </div>
    </div>
    <div class="row">
      <div class="col-6">
        <router-link :to="{name: 'addeditvendortypes'}">
          <button class="btn btn-block btn-primary">Create Type</button>
        </router-link>
      </div>
      <div class="col-6">
        <router-link :to="{name: 'addeditadlocations'}">
          <button class="btn btn-block btn-primary">Create Location</button>
        </router-link>
      </div>
    </div>
  </div>

</template>

<script>
import AdList from "./ad-list/AdList.vue";
// import AdTypeList from "./ad-type-list/AdTypeList.vue";
import AdLocationList from "./ad-location-list/AdLocationList.vue";

export default {
  components: {
    // AdList
    // AdTypeList,
    AdLocationList
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
