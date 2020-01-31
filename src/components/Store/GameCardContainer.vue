<template>
  <ul id="gamesContainer">
    <li v-for="item in requestResult" v-bind:key="item">
      <game-crd item-model="item"></game-crd>
    </li>
  </ul>
</template>

<script>
import paths from "./index";
import GameCard from "./GameCard";
import GameModel from "./Models/GameModel";
import GameModelList from "./Models/GameModelList";
export default {
  data() {
    return {
      requestResult: GameModelList
    };
  },
  mounted() {
    axios.get(paths.Games.GetAll).then(response => {
      requestResult = response;
    });
  },
  components: { "game-crd": GameCard }
};
</script>
