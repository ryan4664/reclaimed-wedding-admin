
<template>
  <div>
    <form>
      <div class="row">
          <div class="col-12">
            <div class="row">
              <div class="col-12">
                <h2>${{ad.price}} - {{ad.title}}</h2>
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <p>{{ad.description}}</p>
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <gallery :images="ad.imageUrls" :index="index" @close="index = null"></gallery>
                <img class="image"
                  v-for="(image, imageIndex) in ad.imageUrls"
                  :key="imageIndex"
                  @click="index = imageIndex"
                  :style="{ backgroundImage: 'url(' + image + ')'}">
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <h3>Contact Poster</h3>
                <hr>
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <textarea class="form-control" v-model="message.text"></textarea>
              </div>
              <div class="col-12">
                <button class="btn btn-primary" type="button"v-on:click="sendMessage">Send</button>
              </div>
            </div>
            <div class="row">
              <div class="col-12 text-right">
                <button class="btn btn-danger" v-on:click="deleteAd(ad._id)">
                  Delete
                </button>
              </div>
            </div>
          </div>
      </div>
    </form>
  </div>
</template>

<script>
import VueGallery from "vue-gallery";

export default {
  props: ["id"],
  data() {
    return {
      index: null,
      ad: {},
      message: {}
    };
  },
  components: {
    gallery: VueGallery
  },
  created: function() {
    this.$http.get("/api/ad/findOne/" + this.$props.id).then(response => {
      this.ad = response.body;
    });
  },
  methods: {
    sendMessage() {
      this.$http.post("/api/ad/contact", this.message).then(response => {});
    },
    deleteAd(id) {
      this.$http.delete(`/api/ad/${id}`, this.message).then(response => {
        if (response.status === 200) {
          this.$router.push({
            name: "home"
          });
        }
      });
    }
  }
};
</script>

<style scoped>
.image {
  width: 300px;
  height: 200px;
  background-size: cover;
  margin: 1em;
  border: 1px solid #f5f5f5;
  border-radius: 0.5em;
}

.image:hover {
  cursor: pointer;
}

a:not([href]):not([tabindex]) {
  color: #fff !important;
}
</style>