
<template>
  <div>
    <div class="row">
      <div class="col-12">
        <form class="needs-validation" novalidate>
          <div class="row">
            <div class="col-md-6 mb-3">
              <label>Id</label>
              <input type="text" class="form-control" v-model="search._id">
            </div>
            <!-- <div class="col-md-6 mb-3">
              <label for="lastName">Last name</label>
              <input type="text" class="form-control" id="lastName" placeholder="" value="" required>
              <div class="invalid-feedback">
                Valid last name is required.
              </div>
            </div> -->
          </div>
        </form>
      </div>
      <div class="col-12 text-right">
        <button class="btn btn-primary" type="button" v-on:click="find">Search</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ads: [],
      search : {}
    };
  },
  // components: {},
  // created: function() {
  //   this.$http.get("/api/ad/light").then(response => {
  //     this.ads = response.body;
  //   });
  // },
  methods: {
    find () {
      console.log(this.search);
    }
    // edit(id) {
    //   this.$router.push({
    //     name: "addeditad",
    //     params: { id: id }
    //   });
    // }
  }
};
</script>

<style scoped>
</style>