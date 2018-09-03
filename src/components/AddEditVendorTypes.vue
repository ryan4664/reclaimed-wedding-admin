<template>
  <div>
    <div class="row">
      <div class="col-12">
        <h3>Add/Edit Vendor Type</h3>
      </div>
    </div>
    <add-edit-vendor-type v-bind:id="vendorTypeId"></add-edit-vendor-type>
  </div>

</template>

<script>
import AddEditVendorType from "./add-edit-vendor-type/AddEditVendorType.vue";

export default {
  components: {
    AddEditVendorType
  },
  props: ["id"],
  name: "addeditvendortypes",
  data() {
    return {
      vendorTypeId : this.$props.id
    };
  },
  created: function() {
    if(!this.vendorTypeId) {
      this.vendorTypeId = null
    }
  },
  methods: {
    find: function() {}
  }
};
</script>

<style scoped>
</style>
