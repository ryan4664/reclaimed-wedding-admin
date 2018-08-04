<template>
  <div>
    <div class="row">
      <div class="col-12">
        <h3>Add/Edit Vendor Type</h3>
      </div>
    </div>
    <add-edit-vendor-type></add-edit-vendor-type>
  </div>

</template>

<script>
import AddEditVendorType from "./add-edit-vendor-type/AddEditVendorType.vue";
export default {
  components : {
    AddEditVendorType
  },
  name: "addeditvendortypes",
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
