<template>
    <main>
        <MADBHeader />
            <div class="title-box">
              <p class="mini-title">Browse</p>
                <p class="main-title">Photocards</p>
                <img class="img-return" src="https://i.postimg.cc/kXjtNNBr/Icon-Return.png">
            </div>
            <div>
              <p class="filter-text">Artist</p>
                    <div class="filter-container">
                    <select id="filter-artist" v-model="selectedFilterArtist">
                        <option v-for="artist in filterArtists" :key="artist" :value="artist">
                        {{ artist }}
                        </option>
                    </select>
                    </div>
                    <p class="filter-text">Album</p>
                    <div class="filter-container">
                    <select id="filter-era" v-model="selectedFilterEra">
                        <option v-for="era in filterEras" :key="era" :value="era">
                        {{ era }}
                        </option>
                    </select>
                    </div>
                    <div class="image-container">
                    <div v-for="image in filteredImages" :key="image.src" class="image-wrapper">
                      <router-link :to="{ name: 'Profile', params: { id: image.alt } }">
                        <img :src="image.src" :alt="image.alt" class="masked-image" />
                      </router-link>
                    </div>
                </div>
            </div>
        <MADBFooter />
    </main>
  </template>
  
  
  <script>
    import MADBHeader from './icons/MADBHeader.vue';
    import MADBFooter from './icons/MADBFooter.vue';

  export default {
    components: {
    MADBHeader,
    MADBFooter,
    },

    data() {
      return {
        selectedFilterArtist: 'All',
        selectedFilterEra: 'All',
        filterArtists: ['All', 'Hongjoong', 'Seonghwa', 'Yunho', 'Yeosang', 'San', 'Mingi', 'Wooyoung', 'Jongho'],
        filterEras: ['All', 'Treasure Ep.1: All To Zero', 'Treasure Ep. 2: Zero To One', 'Treasure Ep. 3: One To All', 'Treasure Ep. Fin: All To Action', 'Treasure Epilogue: Action To Answer', 'Zero: Fever Part.1', 'Zero: Fever Part.2', 'Zero: Fever Part.3', 'Zero: Fever Epilogue', 'The World EP. 1: Movement', 'The World EP. 2: Outlaw', 'The World EP. Fin: Will', 'Golden Hour: Part.1'],
        images: [
          { src: 'https://i.postimg.cc/vZfnmDC8/J-Pirate-King.png', alt: 'JATZ', id: 'JATZ', artist: 'Hongjoong', era: 'Treasure Ep.1: All To Zero' },
          { src: 'https://i.postimg.cc/yNKZ3szm/J-Say-My-Name.png', alt: 'JZTO', id: 'JZTO', artist: 'Hongjoong', era: 'Treasure Ep. 2: Zero To One' },
          { src: 'https://i.postimg.cc/c4VYZf95/J-Illusion.png', alt: 'HOTAI', id: 'HOTAI', artist: 'Hongjoong', era: 'Treasure Ep. 3: One To All' },
          { src: 'https://i.postimg.cc/MGYjyNWh/J-Wave.png', alt: 'HOTAW', id: 'HOTAW', artist: 'Hongjoong', era: 'Treasure Ep. 3: One To All' },
          { src: 'https://i.postimg.cc/7hh7P9rj/J-ATA-A.png', alt: 'JTFA', id: 'JTFA', artist: 'Hongjoong', era: 'Treasure Ep. Fin: All To Action' },
          { src: 'https://i.postimg.cc/fT3X68K9/J-ATA-Z.png', alt: 'JTFZ', id: 'JTFZ', artist: 'Hongjoong', era: 'Treasure Ep. Fin: All To Action' },
          { src: 'https://i.postimg.cc/7hRz5zxh/J-ATA-Aniv.png', alt: 'JTFAn', id: 'JTFAn', artist: 'Hongjoong', era: 'Treasure Ep. Fin: All To Action' },
          { src: 'https://i.postimg.cc/1R7wCkpS/J-ATA-Aniv2.png', alt: 'JTFAn2', id: 'JTFAn2', artist: 'Hongjoong', era: 'Treasure Ep. Fin: All To Action' },
          { src: 'https://i.postimg.cc/ZYXWWgZZ/S-Pirate-King.png', alt: 'SATZ', artist: 'Seonghwa', era: 'Treasure Ep.1: All To Zero' },
          { src: 'https://i.postimg.cc/CLDzkNL8/S-Say-My-Name.png', alt: 'SZTO', artist: 'Seonghwa', era: 'Treasure Ep. 2: Zero To One' },
          { src: 'https://i.postimg.cc/wx1tTzC0/S-Illusion.png', alt: 'ST3', artist: 'Seonghwa', era: 'Treasure Ep. 3: One To All' },
          { src: 'https://i.postimg.cc/T36h9Dp4/S-Wave.png', alt: 'ST3', artist: 'Seonghwa', era: 'Treasure Ep. 3: One To All' },
          { src: 'https://i.postimg.cc/gJTPBf40/S-ATA-A.png', alt: 'STF', artist: 'Seonghwa', era: 'Treasure Ep. Fin: All To Action' },
          { src: 'https://i.postimg.cc/8s8gTM2Q/S-ATA-Z.png', alt: 'STF', artist: 'Seonghwa', era: 'Treasure Ep. Fin: All To Action' },
          { src: 'https://i.postimg.cc/1ttQB9GT/S-ATA-Aniv.png', alt: 'STF', artist: 'Seonghwa', era: 'Treasure Ep. Fin: All To Action' },
          { src: 'https://i.postimg.cc/fySh4Bgf/S-ATA-Aniv2.png', alt: 'STF', artist: 'Seonghwa', era: 'Treasure Ep. Fin: All To Action' },
          { src: 'https://i.postimg.cc/1zL5VKFL/Y-Pirate-King.png', alt: 'YATZ', artist: 'Yunho', era: 'Treasure Ep.1: All To Zero' },
          { src: 'https://i.postimg.cc/760P3TMb/Y-Say-My-Name.png', alt: 'YZTO', artist: 'Yunho', era: 'Treasure Ep. 2: Zero To One' },
          { src: 'https://i.postimg.cc/XvZYvPrf/Y-Illusion.png', alt: 'YT3', artist: 'Yunho', era: 'Treasure Ep. 3: One To All' },
          { src: 'https://i.postimg.cc/7h4HmYm9/Y-Wave.png', alt: 'YT3', artist: 'Yunho', era: 'Treasure Ep. 3: One To All' },
          { src: 'https://i.postimg.cc/wTHMkFrz/Y-ATA-A.png', alt: 'YTF', artist: 'Yunho', era: 'Treasure Ep. Fin: All To Action' },
          { src: 'https://i.postimg.cc/dVN0wFVQ/Y-ATA-z.png', alt: 'YTF', artist: 'Yunho', era: 'Treasure Ep. Fin: All To Action' },
          { src: 'https://i.postimg.cc/SNrs1C0M/Y-ATA-Aniv.png', alt: 'YTF', artist: 'Yunho', era: 'Treasure Ep. Fin: All To Action' },
          { src: 'https://i.postimg.cc/6ppQkqw1/Y-ATA-Aniv2.png', alt: 'YTF', artist: 'Yunho', era: 'Treasure Ep. Fin: All To Action' },
          { src: 'https://i.postimg.cc/PqNPwxR8/YS-Pirate-King.png', alt: 'YSATZ', artist: 'Yeosang', era: 'Treasure Ep.1: All To Zero' },
          { src: 'https://i.postimg.cc/Zqg0FSGs/YS-Say-My-Name.png', alt: 'YSZTO', artist: 'Yeosang', era: 'Treasure Ep. 2: Zero To One' },
          { src: 'https://i.postimg.cc/t4BsJP2j/YS-Illusion.png', alt: 'YST3', artist: 'Yeosang', era: 'Treasure Ep. 3: One To All' },
          { src: 'https://i.postimg.cc/qR3q1F0J/YS-Wave.png', alt: 'YST3', artist: 'Yeosang', era: 'Treasure Ep. 3: One To All' },
          { src: 'https://i.postimg.cc/7PzJ95Y3/YS-ATA-A.png', alt: 'YSTF', artist: 'Yeosang', era: 'Treasure Ep. Fin: All To Action' },
          { src: 'https://i.postimg.cc/VkfSz49g/YS-ATA-Z.png', alt: 'YSTF', artist: 'Yeosang', era: 'Treasure Ep. Fin: All To Action' },
          { src: 'https://i.postimg.cc/Qxr9yjHR/YS-ATA-Aniv.png', alt: 'YSTF', artist: 'Yeosang', era: 'Treasure Ep. Fin: All To Action' },
          { src: 'https://i.postimg.cc/wTcyKnN3/YS-ATA-Aniv2.png', alt: 'YSTF', artist: 'Yeosang', era: 'Treasure Ep. Fin: All To Action' },
          { src: 'https://i.postimg.cc/QMPPj6qV/SN-Pirate-King.png', alt: 'SNATZ', artist: 'San', era: 'Treasure Ep.1: All To Zero' },
          { src: 'https://i.postimg.cc/KzMWjn9f/SN-Say-My-Name.png', alt: 'SNZTO', artist: 'San', era: 'Treasure Ep. 2: Zero To One' },
          { src: 'https://i.postimg.cc/cJ62yqwV/SN-Illusion.png', alt: 'SNT3', artist: 'San', era: 'Treasure Ep. 3: One To All' },
          { src: 'https://i.postimg.cc/BbfVKXk0/SN-Wave.png', alt: 'SNT3', artist: 'San', era: 'Treasure Ep. 3: One To All' },
          { src: 'https://i.postimg.cc/FsQMfBXL/SN-ATA-A.png', alt: 'SNTF', artist: 'San', era: 'Treasure Ep. Fin: All To Action' },
          { src: 'https://i.postimg.cc/DwxHMfJr/SN-ATA-Z.png', alt: 'SNTF', artist: 'San', era: 'Treasure Ep. Fin: All To Action' },
          { src: 'https://i.postimg.cc/02dL709H/SN-ATA-Aniv.png', alt: 'SNTF', artist: 'San', era: 'Treasure Ep. Fin: All To Action' },
          { src: 'https://i.postimg.cc/RZS2dJFC/SN-ATA-Aniv2.png', alt: 'SNTF', artist: 'San', era: 'Treasure Ep. Fin: All To Action' },
          { src: 'https://i.postimg.cc/RV5B70Kq/M-Pirate-King.png', alt: 'MATZ', artist: 'Mingi', era: 'Treasure Ep.1: All To Zero' },
          { src: 'https://i.postimg.cc/65rNYNfc/M-Say-My-Name.png', alt: 'MZTO', artist: 'Mingi', era: 'Treasure Ep. 2: Zero To One' },
          { src: 'https://i.postimg.cc/59FJQzHZ/M-Illusion.png', alt: 'MT3', artist: 'Mingi', era: 'Treasure Ep. 3: One To All' },
          { src: 'https://i.postimg.cc/9QcHkNxh/M-Wave.png', alt: 'MT3', artist: 'Mingi', era: 'Treasure Ep. 3: One To All' },
          { src: 'https://i.postimg.cc/g0Sp8qHP/M-ATA-A.png', alt: 'MTF', artist: 'Mingi', era: 'Treasure Ep. Fin: All To Action' },
          { src: 'https://i.postimg.cc/T1mX88MR/M-ATA-Z.png', alt: 'MTF', artist: 'Mingi', era: 'Treasure Ep. Fin: All To Action' },
          { src: 'https://i.postimg.cc/MTnSDM9f/M-ATA-Aniv.png', alt: 'MTF', artist: 'Mingi', era: 'Treasure Ep. Fin: All To Action' },
          { src: 'https://i.postimg.cc/W3xPfNyW/M-ATA-Aniv2.png', alt: 'MTF', artist: 'Mingi', era: 'Treasure Ep. Fin: All To Action' },
          { src: 'https://i.postimg.cc/Wz7XqS0G/W-Pirate-King.png', alt: 'WATZ', artist: 'Wooyoung', era: 'Treasure Ep.1: All To Zero' },
          { src: 'https://i.postimg.cc/05Gt45hz/W-Say-My-Name.png', alt: 'WZTO', artist: 'Wooyoung', era: 'Treasure Ep. 2: Zero To One' },
          { src: 'https://i.postimg.cc/8cGZCxfk/W-Illusion.png', alt: 'WT3', artist: 'Wooyoung', era: 'Treasure Ep. 3: One To All' },
          { src: 'https://i.postimg.cc/kXnjP3df/W-Wave.png', alt: 'WT3', artist: 'Wooyoung', era: 'Treasure Ep. 3: One To All' },
          { src: 'https://i.postimg.cc/Zq97s8hm/W-ATA-A.png', alt: 'WTF', artist: 'Wooyoung', era: 'Treasure Ep. Fin: All To Action' },
          { src: 'https://i.postimg.cc/W3g9Ts3f/W-ATA-Z.png', alt: 'WTF', artist: 'Wooyoung', era: 'Treasure Ep. Fin: All To Action' },
          { src: 'https://i.postimg.cc/JzYYQTvK/W-ATA-Aniv.png', alt: 'WTF', artist: 'Wooyoung', era: 'Treasure Ep. Fin: All To Action' },
          { src: 'https://i.postimg.cc/VN37xJYC/W-ATA-Aniv2.png', alt: 'WTF', artist: 'Wooyoung', era: 'Treasure Ep. Fin: All To Action' },
          { src: 'https://i.postimg.cc/0NZ3hkzG/JO-Pirate-King.png', alt: 'JOATZ', artist: 'Jongho', era: 'Treasure Ep.1: All To Zero' },
          { src: 'https://i.postimg.cc/RFF8Bktk/JO-Say-My-Name.png', alt: 'JOZTO', artist: 'Jongho', era: 'Treasure Ep. 2: Zero To One' },
          { src: 'https://i.postimg.cc/N0QSN9jf/JO-Illusion.png', alt: 'JOT3', artist: 'Jongho', era: 'Treasure Ep. 3: One To All' },
          { src: 'https://i.postimg.cc/RFDYVgQN/JO-Wave.png', alt: 'JOT3', artist: 'Jongho', era: 'Treasure Ep. 3: One To All' },
          { src: 'https://i.postimg.cc/zv44pxV9/JO-ATA-A.png', alt: 'JOTF', artist: 'Jongho', era: 'Treasure Ep. Fin: All To Action' },
          { src: 'https://i.postimg.cc/6prFLLwm/JO-ATA-Z.png', alt: 'JOTF', artist: 'Jongho', era: 'Treasure Ep. Fin: All To Action' },
          { src: 'https://i.postimg.cc/J7gw1zPP/JO-ATA-Aniv.png', alt: 'JOTF', artist: 'Jongho', era: 'Treasure Ep. Fin: All To Action' },
          { src: 'https://i.postimg.cc/WbJBtcyj/JO-ATA-Aniv2.png', alt: 'JOTF', artist: 'Jongho', era: 'Treasure Ep. Fin: All To Action' },
        ]
      };
    },
    computed: {
    filteredImages() {
      return this.images.filter(image => {
        return (this.selectedFilterArtist === 'All' || image.artist === this.selectedFilterArtist) &&
               (this.selectedFilterEra === 'All' || image.era === this.selectedFilterEra);
      });
    }
  }
};
</script>
  
  <style scoped>

  .filter-container {
    display: flex;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
  }

  .filter-text {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }
  
  .image-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 50px;
    padding-bottom: 50px;
  }
  
  .image-wrapper {
    position: relative;
    margin-right: 10px;
    margin-bottom: 10px;
  }
  
  .masked-image {
    -webkit-mask-image: url(https://i.postimg.cc/9057WTFz/pc-mask.png);
    mask-image: url(https://i.postimg.cc/9057WTFz/pc-mask.png);
    -webkit-mask-repeat: no-repeat;
    mask-repeat: no-repeat;    
  }
  </style>