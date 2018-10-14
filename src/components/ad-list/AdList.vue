
<template>
  <div>
    <div class="row">
      <div class="col-12">
        <form class="needs-validation" novalidate>
          <div class="row">
            <div class="col-3 mb-3">
              <label>Id</label>
              <input type="text" class="form-control" v-model="search._id" />
            </div>
            <div class="col-3 mb-3">
              <label>Title</label>
              <input type="text" class="form-control" v-model="search.title"/>
            </div>
            <div class="col-3 mb-3">
              <label>Price</label>
              <input type="text" class="form-control" v-model="search.price"/>
            </div>
            <div class="col-3 mb-3">
              <label>Email</label>
              <input type="text" class="form-control" v-model="search.email"/>
            </div>
            <!-- <div class="col-3 mb-3">
              <label>Id</label>
              <input type="text" class="form-control" v-model="search._id"/>
            </div>
            <div class="col-3 mb-3">
              <label>Id</label>
              <input type="text" class="form-control" v-model="search._id"/>
            </div> -->
            <div class="col-3 mb-3">
              <label>Description</label>
              <input type="text" class="form-control" v-model="search.description"/>
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
        <button class="btn btn-primary" type="button" v-on:click="clear">Clear</button>
        <button class="btn btn-primary" type="button" v-on:click="find">Search</button>
      </div>
    </div>
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
      ads: [],
      search: {},
      columns: ["id", "title", "description", "price", "email", "location"],
      options: {
        headings: {
          name: "Country Name",
          code: "Country Code",
          uri: "View Record"
        } // see the options API
      }
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
    },
    find() {
      this.$http.post("/api/ad/search", this.search).then(
        response => {
          console.log(response);
          this.ads = response.body.ads;
        },
        response => {
          this.errors = response.body;
          this.$toasted.show(
            "There were some errors :( please review and try again!"
          );
        }
      );
    },
    clear() {
      this.search = {};
    }
  }
};
</script>

<style scoped>
</style>