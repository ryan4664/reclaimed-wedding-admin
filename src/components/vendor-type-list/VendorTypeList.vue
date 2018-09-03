
<template>
  <div>
    <div class="row">
      <div class="col-12">
        <table class="table table-hover">
          <thead>
            <tr>
              <th>Type</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
              <tr v-for="vendorType in vendorTypes" v-bind:key="vendorType._id" v-on:click="edit(vendorType._id)">
                <td>{{vendorType.type}}</td>
                <td>{{vendorType.description}}</td>
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
      vendorTypes: []
    };
  },
  components: {},
  created: function() {
    this.$http.get("/api/vendortypes").then(response => {
      this.vendorTypes = response.body;
    });
  },
  methods: {
    edit(id) {
      this.$router.push({
        name: "addeditvendortypes",
        params: { id: id }
      });
    }
  }
};
</script>

<style scoped>

</style>