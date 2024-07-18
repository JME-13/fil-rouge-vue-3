<template>
  <main>
    <MADBHeader />
    <div class="main-bg">
      <div class="title-box">
        <p class="mini-title">Photocard</p>
        <p class="main-title">{{ profile.member }}</p>
        <img class="img-return" src="https://i.postimg.cc/kXjtNNBr/Icon-Return.png">
      </div>
      <div v-if="profile">
        <div v-for="image in profile.images" :key="image">
          <img :src="image" width="200px" class="pc-mask" />
          <br>
                <p class="profile-title">Album</p>
                <p class="profile-text">{{ profile.album }}</p>
                <p class="profile-title">Version</p>
                <p class="profile-text">{{ profile.version }}</p>
        </div>
        <br>
                <div><p class="add-to-collection">Add To Collection</p></div>
        <br>
        <p class="profile-title">More from this album</p>
        <div class="related-images-container">
        <div v-if="relatedImages.length">
          <div v-for="relatedImage in relatedImages" :key="relatedImage.src" class="related-image-wrapper">
            <router-link :to="{ name: 'Profile', params: { id: profile.id } }">
              <img :src="relatedImage.src" class="pc-mask-more" />
            </router-link>
          </div>
        </div>
        <div v-else>
          <p class="empty-text">There aren't any other {{ profile.member }} photocards in this album!</p>
        </div>
        </div>
      </div>
    </div>
    <MADBFooter />
  </main>
</template>


<script>
  import MADBHeader from '../icons/MADBHeader.vue';
  import MADBFooter from '../icons/MADBFooter.vue';
  import { profiles } from './profiles.js';

  export default {
    name: 'Profile',
      components: {
          MADBHeader,
          MADBFooter,
  },

  props: {
    id: {
      type: String,
      required: true,
    },
  },
  computed: {
    profile() {
      return this.profiles[this.id];
    },
    relatedImages() {
      if (!this.profile) return [];
      const currentAlbum = this.profile.album;
      return Object.entries(this.profiles)
        .filter(([key, profile]) => profile.album === currentAlbum && key !== this.id)
        .flatMap(([_, profile]) => profile.images.map(src => ({ src })));
    },
  },

  data() {
    return {
      profiles,
    };
  },
  watch: {
    id(newId) {
      this.$forceUpdate();
    },
  },
};
</script>

<style scoped>
  .main-bg {
    float: center;
    border-radius: 50px 0px 50px 0px;
    background-color: #000;
    margin-left: auto;
    margin-right: auto;
    padding-top: 50px;
    width: 95%;
    font-family: "MuseoModerno";
    font-weight: bold;
    color: #ffffff;
    overflow: hidden;
  }

    .pc-mask {
    -webkit-mask-image: url(https://i.postimg.cc/mgxwVK2L/pc-profile-mask.png);
    mask-image: url(https://i.postimg.cc/mgxwVK2L/pc-profile-mask.png);
    -webkit-mask-repeat: no-repeat;
    mask-repeat: no-repeat;
    mask-size: 200px;
    margin-top: 30px;
    display: flex;
    margin-left: auto;
    margin-right: auto;    
  }

  .pc-mask-more {
    -webkit-mask-image: url(https://i.postimg.cc/9057WTFz/pc-mask.png);
    mask-image: url(https://i.postimg.cc/9057WTFz/pc-mask.png);
    -webkit-mask-repeat: no-repeat;
    mask-repeat: no-repeat;
    float: inline-start;
    margin: 10px;
  }

 .related-images-container {
  width: 90%;
  margin-left: auto;
  margin-right: auto;
}

.profile-title {
    text-align: center;
    font-size: 20px;
}

.profile-text {
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  color: #D87400;
  font-size: 26px;
}

.add-to-collection {
  width: 250px;
  margin-left: auto;
  margin-right: auto; 
  text-align: center;
  background-color: #D87400;
  color: white;
  border-radius: 30px;
  padding: 10px;
  font-weight: bold;
  font-size: 24px;
}

.empty-text {
  text-align: center;
  padding-bottom: 50px;
}
</style>