<template>
  <div>
    <store-header></store-header>
    <store-carousel></store-carousel>
    <game-crd></game-crd>
  </div>
</template>

<script>
import MyCarousel from "./MyCarousel";
import StoreHeader from "./../Shared/StoreHeader";
import GameCard from "./GameCard";

export default {
  name: "StoreFront",
  components: {
    "store-carousel": MyCarousel,
    "store-header": StoreHeader,
    "game-crd": GameCard
  }
};
</script>
