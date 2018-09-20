<template>
<div>
  <div v-if="pendingVendor">
    <div class="row">
      <div class="col-12">
        <h3>PENDING: {{pendingVendor.vendorName}}</h3>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <hr>
      </div>
    </div>
    <div class="row">
      <div class="col-4">
        <p>Vendor Name</p>
        <p>Owner Name</p>
        <p>Email</p>
        <p>Description</p>
        <p>Type</p>
      </div>
      <div class="col-8">
        <p>{{pendingVendor.vendorName}}</p>
        <p>{{pendingVendor.ownerName}}</p>
        <p>{{pendingVendor.email}}</p>
        <p>{{pendingVendor.description}}</p>
        <p>{{pendingVendor.type.type}}</p>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-6 text-left">
      <router-link to="/vendors" tag="button" class="btn btn-default">Back</router-link>
    </div>
    <div class="col-6 text-right">
      <button class="btn btn-danger" type="button" v-on:click="remove">Delete</button>
      <button class="btn btn-success" type="button" v-on:click="save">Save</button>
    </div>  
  </div>
</div>
</template>
<script>
export default {
  components: {},
  props: ["vendorId"],
  name: "pendingvendor",
  data() {
    return {
      pendingVendorId: this.$props.vendorId,
      pendingVendor: null
    };
  },
  created: function() {
    this.$http
      .get(`/api/vendorApplications/pending/${this.pendingVendorId}`)
      .then(({ body }) => {
        this.pendingVendor = body;
      });
  },
  methods: {
    save() {
      let newVendor = {
        name: this.pendingVendor.vendorName,
        description: this.pendingVendor.description,
        type: this.pendingVendor.type
      };
      this.$http.post(`/api/vendors`, newVendor).then(({ body }) => {
        this.$http.delete(`/api/vendorApplications/pending/${this.pendingVendor._id}`).then(({ body }) => {
          this.$router.push({ name: "vendor-management" });
        });
      });
    },
    remove() {
      this.$http
        .delete(`/api/vendorApplications/pending/${this.pendingVendorId}`)
        .then(({ body }) => {
          this.$router.push({ name: "vendor-management" });
        });
    }
  }
};
</script>

<style scoped>
</style>
