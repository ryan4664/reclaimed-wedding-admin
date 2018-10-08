
<template>
  <div>
    <div class="row">
      <div class="col-12">
        <form>
          <div class="form-group">
            <label>Location <span class="text-danger" v-if="errors.description">{{errors.description}}</span></label>
            <textarea type="text" v-model="adLocation.description" class="form-control"></textarea>
          </div>
          <div class="row">
            <div class="col-6 text-left">
              <router-link to="/ad-management" tag="button" class="btn btn-default">Back</router-link>
            </div>
            <div class="col-6 text-right">
              <button class="btn btn-danger" type="button" v-on:click="remove" v-if="adLocationId">Delete</button>
              <button class="btn btn-success" type="button" v-on:click="save" v-if="!adLocationId">Save</button>
              <button class="btn btn-success" type="button" v-on:click="update" v-if="adLocationId">Save</button>
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
      adLocationId: this.$props.id,
      adLocation: {},
      errors : {}
    };
  },
  created: function() {
    if (this.adLocationId) {
      this.$http
        .get(`/api/adLocations/${this.adLocationId}`)
        .then(({ body }) => {
          this.adLocation = body;
        });
    } else {
      this.adLocationId = null;
    }
  },
  methods: {
    save() {
      this.$http
        .post("/api/adLocations", this.adLocation)
        .then(({ status }) => {
          if (status === 200) {
            this.$router.push({ name: "ad-management" });
          }
        }),
        response => {
          this.errors = response.body;
          this.$toasted.show(
            "There were some errors :( please review and try again!"
          );
        };
    },
    update() {
      this.$http
        .put(`/api/adLocations/${this.adLocationId}`, this.adLocation)
        .then(({ body }) => {
          this.$router.push({ name: "ad-management" });
        },
        response => {
          this.errors = response.body;
          this.$toasted.show(
            "There were some errors :( please review and try again!"
          );
        });
    },
    remove() {
      this.$http
        .delete(`/api/adLocations/${this.adLocationId}`)
        .then(({ body }) => {
          this.$router.push({ name: "ad-management" });
        });
    }
  }
};
</script>

<style scoped>
</style>