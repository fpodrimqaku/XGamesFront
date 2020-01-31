import Vue from "vue";
import MyCarousel from "./MyCarousel.vue";
import GameCard from "./GameCard.vue";
import StoreHeader from "./../Shared/StoreHeader";
import vuetify from "@/plugins/vuetify"; // path to vuetify export
import paths from "./../../../Environment";
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#storefrontcarousel",
  components: { MyCarousel },
  template: "<s-front-carousel/>"
});

Vue.component("store-carousel", MyCarousel);
Vue.component("store-header", StoreHeader);
Vue.component("game-card", GameCard);
export default paths;
