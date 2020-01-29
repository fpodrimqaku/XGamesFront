import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import MyCarousel from "@/components/Store/MyCarousel";
import StoreFront from "@/components/Store/StoreFront";
import StoreHeader from "@/components/Shared/StoreHeader";
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "HelloWorld",
      component: HelloWorld
    },
    {
      path: "/store",
      component: StoreFront
    },
    {
      path: "/carousel",
      component: MyCarousel
    },
    {
      path: "/header",
      component: StoreHeader
    }
  ]
});
