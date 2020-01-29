// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/* eslint-disable */
import Vue from "vue";
import MyCarousel from "./MyCarousel.vue";

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#storefrontcarousel",
  components: { MyCarousel },
  template: "<s-front-carousel/>"
});
