
<template>
  <div>
    <div class="row">
      <div class="col-12">
        <form>
          <div class="form-group">
            <label>Type</label>
            <input type="text" v-model="vendorType.type" class="form-control" />
          </div>
          <div class="form-group">
            <label>Description</label>
            <textarea type="text" v-model="vendorType.description" class="form-control"></textarea>
          </div>
          <button class="btn btn-primary" type="button" v-on:click="save" v-if="!vendorTypeId">Create</button>
          <button class="btn btn-primary" type="button" v-on:click="update" v-if="vendorTypeId">Update</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      vendorType: {}
    };
  },
  created: function() {
    if (this.$route.params.id) {
      this.vendorTypeId = this.$route.params.id;
      this.$http
        .get(`/api/vendors/types/${this.vendorTypeId}`)
        .then(response => {
          this.vendorType = response.body;
        });
    } else {
      this.vendorTypeId = null;
    }
  },
  methods: {
    save() {
      this.$http.post("/api/vendors/types", this.vendorType).then(response => {
        console.log(response);
      });
    },
    update() {
      this.$http.put("/api/vendors/types", this.vendorType).then(response => {
        this.$router.go('vendors ')
      });
    }
  }
};
</script>

<style scoped>

</style>