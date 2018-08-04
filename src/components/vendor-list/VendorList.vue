
<template>
  <div>
    <div class="row">
      <div class="col-12">
        <table class="table table-hover">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Type</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="vendor in vendors" v-bind:key="vendor._id">
              <td>{{vendor._id}}</td>
              <td>{{vendor.name}}</td>
              <td>{{vendor.type.description}}</td>
              <td>{{vendor.description}}</td>
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
      vendors: []
    };
  },
  components: {},
  created: function() {
    this.$http.get("/api/vendors").then(response => {
      this.vendors = response.body;
    });
  }
  // methods: {
  //   sendMessage() {
  //     this.$http.post("/api/ad/contact", this.message).then(response => {
  //       if (response.status === 200) {
  //         this.ad = response.body;
  //       } else {
  //         // no ads found
  //       }
  //     });
  //   }
  // }
};
</script>

<style scoped>

</style>