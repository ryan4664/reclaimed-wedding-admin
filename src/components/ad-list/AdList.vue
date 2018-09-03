
<template>
  <div>
    <div class="row">
      <div class="col-12">
        <table class="table table-hover">
          <thead>
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Description</th>
              <th>Price</th>
              <th>Email</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="ad in ads" v-bind:key="ad._id" v-on:click="edit(ad._id)">
              <td>{{ad._id}}</td>
              <td>{{ad.title}}</td>
              <td>{{ad.description}}</td>
              <td>{{ad.price}}</td>
              <td>{{ad.email}}</td>
              <td>{{ad.location.description}}</td>
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
      ads: []
    };
  },
  components: {},
  created: function() {
    this.$http.get("/api/ad/light").then(response => {
      this.ads = response.body;
    });
  },
  methods: {
    edit(id) {
      this.$router.push({
        name: "addeditad",
        params: { id: id }
      });
    }
  }
};
</script>

<style scoped>

</style>