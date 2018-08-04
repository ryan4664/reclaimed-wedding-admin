<template>
  <div>
    <div class="row">
      <div class="col-12">
        <h3>Add/Edit Ad</h3>
      </div>
    </div>
    <add-edit-ad v-bind:id="id"></add-edit-ad>
  </div>

</template>

<script>
import AddEditAd from "./add-edit-ad/AddEditAd.vue";
export default {
  components: {
    AddEditAd
  },
  name: "addeditads",
  data() {
    return {};
  },
  created: function() {
    this.id = this.$route.params.id;
  },
  methods: {
    find: function() {}
  }
};
</script>

<style scoped>

</style>
