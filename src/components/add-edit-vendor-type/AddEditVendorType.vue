
<template>
  <div>
    <div class="row">
      <div class="col-12">
        <form>
          <div class="form-group">
            <label>Type  <span class="text-danger" v-if="errors.type">{{errors.type}}</span></label>
            <input type="text" v-model="vendorType.type" class="form-control" />
          </div>
          <div class="form-group">
            <label>Description  <span class="text-danger" v-if="errors.description">{{errors.description}}</span></label>
            <textarea type="text" v-model="vendorType.description" class="form-control"></textarea>
          </div>
          <div class="row">
            <div class="col-6 text-left">
              <router-link to="/vendor-management" tag="button" class="btn btn-default">Back</router-link>
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
      vendorType: {},
      errors: {}
    };
  },
  created: function() {
    if (this.vendorTypeId) {
      this.$http
        .get(`/api/vendorTypes/${this.vendorTypeId}`)
        .then(({ body }) => {
          this.vendorType = body;
        });
    } else {
      this.vendorTypeId = null;
    }
  },
  methods: {
    save() {
      this.$http.post("/api/vendorTypes", this.vendorType).then(
        ({ status }) => {
          if (status === 200) {
            this.$router.push({ name: "vendor-management" });
          }
        },
        response => {
          this.errors = response.body;
          this.$toasted.show(
            "There were some errors :( please review and try again!"
          );
        }
      );
    },
    update() {
      this.$http
        .put(`/api/vendorTypes/${this.vendorTypeId}`, this.vendorType)
        .then(
          ({ body }) => {
            this.$router.push({ name: "vendor-management" });
          },
          response => {
            this.errors = response.body;
            this.$toasted.show(
              "There were some errors :( please review and try again!"
            );
          }
        );
    },
    remove() {
      this.$http
        .delete(`/api/vendorTypes/${this.vendorTypeId}`)
        .then(({ body }) => {
          this.$router.push({ name: "vendor-management" });
        });
    }
  }
};
</script>

<style scoped>
</style>