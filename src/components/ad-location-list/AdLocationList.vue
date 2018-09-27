
<template>
  <div>
    <div class="row">
      <div class="col-12">
        <table class="table table-hover">
          <thead>
            <tr>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
              <tr v-for="adLocation in adLocations" v-bind:key="adLocation._id" v-on:click="edit(adLocation._id)">
                <td>{{adLocation.description}}</td>
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
      adLocations: []
    };
  },
  components: {},
  created: function() {
    this.$http.get("./api/adLocations").then(response => {
      this.adLocations = response.body;
    });
  },
  methods: {
    edit(id) {
      this.$router.push({
        name: "addeditadlocations",
        params: { id: id }
      });
    }
  }
};
</script>

<style scoped>

</style>
