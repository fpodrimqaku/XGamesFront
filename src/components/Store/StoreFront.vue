<template>
  <div>
    <store-header></store-header>
    <store-carousel></store-carousel>
    <game-crd></game-crd>
    <game-card-container></game-card-container>
  </div>
</template>

<script>
import MyCarousel from "./MyCarousel";
import StoreHeader from "./../Shared/StoreHeader";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";

export default {
  name: "StoreFront",
  components: {
    "store-carousel": MyCarousel,
    "store-header": StoreHeader,
    "game-crd": GameCard,
    "game-card-container": GameCardContainer
  }
};
</script>
