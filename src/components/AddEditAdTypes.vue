<template>
  <div>
    <div class="row">
      <div class="col-12">
        <h3>Add/Edit Ad Types</h3>
      </div>
    </div>
    <add-edit-ad-type v-bind:id="adTypeId"></add-edit-ad-type>
  </div>

</template>

<script>
import AddEditAdType from "./add-edit-ad-type/AddEditAdType.vue";

export default {
  components: {
    AddEditAdType
  },
  props: ["id"],
  name: "addeditadtypes",
  data() {
    return {
      adTypeId: this.$props.id
    };
  },
  created: function() {
    if (!this.adTypeId) {
      this.adTypeId = null;
    }
  }
};
</script>

<style scoped>
</style>
