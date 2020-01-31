import { Model } from "vue-mc";
import paths from "./../../../../Environment";

class GameModel extends Model {
  // Default attributes that define the "empty" state.
  defaults() {
    return {
      id: null,
      ReleaseDate: null,
      Genre: null,
      Rating: null,
      Pictures: [],
      Description: null,
      Price: null,
      Title: null
    };
  }

  // Attribute mutations.
  mutations() {
    return {
      id: id => Number(id) || null,
      ReleaseDate: Date,
      Genre: String,
      Rating: Number,
      Pictures: Array,
      Description: String,
      Price: Number,
      Title: String
    };
  }

  // Attribute validation
  validation() {
    return {
      id: integer.and(min(1)).or(equal(null)),
      Title: string.and(required)
    };
  }
}

export default GameModel;
