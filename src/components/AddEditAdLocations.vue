<template>
  <div>
    <div class="row">
      <div class="col-12">
        <h3>Add/Edit Ad Locations</h3>
      </div>
    </div>
    <add-edit-ad-location v-bind:id="adLocationId"></add-edit-ad-location>
  </div>

</template>

<script>
import AddEditAdLocation from "./add-edit-ad-location/AddEditAdLocation.vue";

export default {
  components: {
    AddEditAdLocation
  },
  props: ["id"],
  name: "addeditadlocations",
  data() {
    return {
      adLocationId: this.$props.id
    };
  },
  created: function() {
    if (!this.adLocationId) {
      this.adLocationId = null;
    }
  },
  methods: {
    find: function() {}
  }
};
</script>

<style scoped>
</style>
