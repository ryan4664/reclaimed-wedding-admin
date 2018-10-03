
<template>
  <div>
    <div class="row">
      <div class="col-12">
        <form>
          <div class="form-group">
            <label>Type  <span class="text-danger" v-if="errors.type">{{errors.type}}</span></label>
            <input type="text" v-model="adType.type" class="form-control" />
          </div>
          <div class="form-group">
            <label>description  <span class="text-danger" v-if="errors.type">{{errors.type}}</span></label>
            <textarea type="text" v-model="adType.description" class="form-control"></textarea>
          </div>
          <div class="row">
            <div class="col-6 text-left">
              <router-link to="/ad-management" tag="button" class="btn btn-default">Back</router-link>
            </div>
            <div class="col-6 text-right">
              <button class="btn btn-danger" type="button" v-on:click="remove" v-if="adTypeId">Delete</button>
              <button class="btn btn-success" type="button" v-on:click="save" v-if="!adTypeId">Save</button>
              <button class="btn btn-success" type="button" v-on:click="update" v-if="adTypeId">Save</button>
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
      adTypeId: this.$props.id,
      adType: {},
      errors: {}
    };
  },
  created: function() {
    if (this.adTypeId) {
      this.$http.get(`/api/adTypes/${this.adTypeId}`).then(({ body }) => {
        this.adType = body;
      });
    } else {
      this.adTypeId = null;
    }
  },
  methods: {
    save() {
      this.$http.post("/api/adTypes", this.adType).then(
        ({ status }) => {
          if (status === 200) {
            this.$router.push({ name: "ad-management" });
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
        .put(`/api/adTypes/${this.adTypeId}`, this.adType)
        .then(({ body }) => {
          this.$router.push({ name: "ad-management" });
        }),
        response => {
          this.errors = response.body;
          this.$toasted.show(
            "There were some errors :( please review and try again!"
          );
        };
    },
    remove() {
      this.$http.delete(`/api/adTypes/${this.adTypeId}`).then(({ body }) => {
        this.$router.push({ name: "ad-management" });
      });
    }
  }
};
</script>

<style scoped>
</style>