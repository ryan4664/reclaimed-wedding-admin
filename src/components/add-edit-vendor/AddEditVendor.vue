
<template>
  <div>
    <div class="row">
      <div class="col-12">
        <form>
          <div class="form-group">
            <label >Type</label>
            <input type="text" v-model="vendor.type" class="form-control" />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Description</label>
            <input type="text" v-model="vendorType.description" class="form-control" />
          </div>
          <button class="btn btn-primary" v-on:click="save">Create</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      vendorType: {}
    };
  },
  created : function() {
    this.$http.get(`/api/vendorTypes/${this.$props.id}`).then(({ body }) => {
      this.vendorType = body;
    });
  },
  methods: {
    save() {
      this.$http.post("/api/vendorTypes", this.vendorType).then(response => {
          console.log(response)
      });
    }
  }
};
</script>

<style scoped>
</style>