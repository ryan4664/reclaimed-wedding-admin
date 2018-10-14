<template>
  <div>
    <div class="row">
      <div class="col-12">
        <h2 class="my-2">Ads</h2>
      </div>
    </div>
    <ad-list></ad-list>
  </div>
</template>

<script>
import AdList from "./ad-list/AdList.vue";

export default {
  components: {
    AdList
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
