import { ingredientsReducer } from "./ingredientsReducer";

const { combineReducers } = require("redux");

export default combineReducers({
  ingredients: ingredientsReducer,
});
