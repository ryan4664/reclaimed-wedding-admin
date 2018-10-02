<template>
  <div>
    <div class="row">
      <div class="col-12">
        <h2 class="my-2">Ads</h2>
      </div>
    </div>
    <ad-search></ad-search>
    <ad-list></ad-list>
  </div>
</template>

<script>
import AdList from "./ad-list/AdList.vue";
import AdSearch from "./ad-search/AdSearch";

export default {
  components: {
    AdList,
    AdSearch
  },
  name: "home",
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
