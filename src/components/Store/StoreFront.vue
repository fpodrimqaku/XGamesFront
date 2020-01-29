<template>
  <div>
    <store-header></store-header>
    <store-carousel></store-carousel>
  </div>
</template>

<script>
import MyCarousel from "./MyCarousel";
import StoreHeader from "./../Shared/StoreHeader";
export default {
  name: "StoreFront",
  components: {
    "store-carousel": MyCarousel,
    "store-header": StoreHeader
  }
};
</script>
