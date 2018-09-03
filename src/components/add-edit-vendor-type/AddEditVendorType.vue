
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
          <div class="row">
            <div class="col-6 text-left">
              <router-link to="/vendors" tag="button" class="btn btn-default">Back</router-link>
              <!-- <button class="btn btn-primary" type="button" v-on:click="save">Back</button> -->
            </div>
            <div class="col-6 text-right">
              <button class="btn btn-danger" type="button" v-on:click="remove" v-if="vendorTypeId">Delete</button>
              <button class="btn btn-success" type="button" v-on:click="save" v-if="!vendorTypeId">Save</button>
              <button class="btn btn-success" type="button" v-on:click="update" v-if="vendorTypeId">Save</button>
            </div>
          </div>
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
      vendorTypeId: this.$props.id,
      vendorType: {}
    };
  },
  created: function() {
    if (this.vendorTypeId) {
      this.$http
        .get(`/api/vendortypes/${this.vendorTypeId}`)
        .then(({ body }) => {
          this.vendorType = body;
        });
    } else {
      this.vendorTypeId = null;
    }
  },
  methods: {
    save() {
      this.$http
        .post("/api/vendortypes", this.vendorType)
        .then(({ status }) => {
          if (status === 200) {
            this.$router.push({ name: "vendor-management" });
          }
        });
    },
    update() {
      this.$http
        .put(`/api/vendortypes/${this.vendorTypeId}`, this.vendorType)
        .then(({ body }) => {
          this.$router.push({ name: "vendor-management" });
        });
    },
    remove() {
      this.$http
        .delete(`/api/vendortypes/${this.vendorTypeId}`)
        .then(({ body }) => {
          this.$router.push({ name: "vendor-management" });
        });
    }
  }
};
</script>

<style scoped>
</style>