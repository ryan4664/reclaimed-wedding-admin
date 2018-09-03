
<template>
  <div>
    <div class="row">
      <div class="col-12">
        <table class="table table-hover">
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
              <tr v-for="pendingVendor in pendingVendors" v-bind:key="pendingVendor._id" v-on:click="edit(pendingVendor._id)">
                <td>{{pendingVendor.vendorName}}</td>
                <td>{{pendingVendor.type.type}}</td>
                <td>{{pendingVendor.description}}</td>
              </tr>  
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pendingVendors: []
    };
  },
  components: {},
  created: function() {
    this.$http.get("/api/vendors/applications/pending").then(({ body }) => {
      this.pendingVendors = body;
    });
  },
  methods: {
    edit(id) {
      this.$router.push({
        name: "pendingvendor",
        params: { vendorId: id }
      });
    }
  }
};
</script>

<style scoped>
</style>