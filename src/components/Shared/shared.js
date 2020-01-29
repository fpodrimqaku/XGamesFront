// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/* eslint-disable */
import Vue from "vue";
import StoreHeader from "./StoreHeader.vue";
Vue.config.productionTip = false;

new Vue({
  el: "#storeheader",
  components: { StoreHeader },
  template: "<store-header/>"
});
