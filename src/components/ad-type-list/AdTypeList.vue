
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
              <tr v-for="adType in adTypes" v-bind:key="adType._id" v-on:click="edit(adType._id)">
                <td>{{adType.type}}</td>
                <td>{{adType.description}}</td>
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
      adTypes: []
    };
  },
  components: {},
  created: function() {
    this.$http.get("./api/adTypes").then(response => {
      this.adTypes = response.body;
    });
  },
  methods: {
    edit(id) {
      this.$router.push({
        name: "addeditadtypes",
        params: { id: id }
      });
    }
  }
};
</script>

<style scoped>

</style>
