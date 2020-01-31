import { Collection } from "vue-mc";
import paths from "./../../../../Environment";

class GameModelList extends Collection {
  // Model that is contained in this collection.
  model() {
    return GameModel;
  }

  // Default attributes
  defaults() {
    return {
      orderBy: "id"
    };
  }
}

export default GameModelList;
