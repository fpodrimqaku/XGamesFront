<template>
  <carousel
    id="storeFrontCarousel"
    :perPage="1"
    :autoplay="true"
    :paginationEnabled="false"
  >
    <slide class="cSlide">
      <img
        class="sliderImage"
        src="https://i.pinimg.com/originals/ff/c3/8d/ffc38d9bce22d7a9eaa07b890e3af1a2.jpg"
      />
      <span class="SlideText bottom-left">Outsmart your opponent </span>
    </slide>
    <slide class="cSlide">
      <img
        class="sliderImage"
        src="https://wallpapercave.com/wp/wc1692298.jpg"
      />
      <span class="SlideText bottom-left">Explore, Risk and Survive</span>
    </slide>
    <slide class="cSlide">
      <img
        class="sliderImage"
        src="https://images-na.ssl-images-amazon.com/images/I/81bRacT8elL._SL1500_.jpg"
      />
      <span class="SlideText bottom-left">Always watch your back</span>
    </slide>
    <slide class="cSlide">
      <img
        class="sliderImage"
        src="https://i.pinimg.com/originals/cd/91/90/cd9190a38df82b8c2a225fa6bce96f18.jpg"
      />
      <span class="SlideText bottom-left"
        >Never take your foot off the pedal</span
      >
    </slide>
  </carousel>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";

export default {
  name: "MyCarousel",
  data() {
    return {
      msg: "The carousel part"
    };
  },
  components: {
    Carousel,
    Slide
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cSlide {
  width: 100%;
  height: 65vh;
  overflow: hide;
  position: relative;

  text-align: center;
  color: white;
}

.sliderImage {
  width: 100%;
}

carousel {
  margin-top: none;
}

span.SlideText {
  font-size: 2em;

  color: white;
  background: rgba(255, 255, 255, 0.1);
}

/* Bottom left text */
.bottom-left {
  position: absolute;
  bottom: 8px;
  left: 16px;
}
.storeFrontCarousel {
  margin-top: 0;
}
</style>
