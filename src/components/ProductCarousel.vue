<template>
  <div class="slider-imgs">
    <div class="img-display">
      <div class="img-showcase">
        <img :src="url + images[indexImage].path" alt="shoe image">
      </div>
    </div>
    <div class="img-select">
      <div class="img-item" v-for="(image, index) in images" :key="index">
        <a href="#" :data-id="index">
          <img :src="url + image.path" alt="shoe image" @click="ClickImageProduct(index)">
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['images'],
  data() {
    return {
      url: "https://localhost:5001/",
      indexImage: 0
    }
  },
  methods: {
    ClickImageProduct(index) {
      this.indexImage = index
    }
  }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700;800&display=swap');

.slider-imgs {
  width: 500px;
  float: left;
  text-align: center;
  background: #fff;
  overflow: hidden;
  padding-left: 15px;
  padding-right: 15px;
}

.card-wrapper {
  max-width: 1100px;
}

img {
  width: 100%;
}

.img-display {
  overflow: hidden;
}

.img-showcase {
  display: flex;
  width: 100%;
  transition: all 0.5s ease;
}

.img-showcase img {
  min-width: 100%;
}

.img-select {
  display: flex;
}

.img-item {
  margin: 0.3rem;
}

.img-item:nth-child(1),
.img-item:nth-child(2),
.img-item:nth-child(3) {
  margin-right: 0;
}

.img-item:hover {
  opacity: 0.8;
}
</style>