import baseServerApi from "../api/baseServerApi";
import {
  FETCH_INGREDIENTS,
  INCREMENT_INGREDIENT,
  DECREMENT_INGREDIENT,
} from "./types";

export const getIngredients = () => {
  return async (dispatch) => {
    baseServerApi
      .get("/salad.json")
      .then((response) => {
        dispatch({
          type: FETCH_INGREDIENTS,
          ingredients: response.data.items.map((item) => ({
            ...item,
            quantity: 0,
          })),
        });
      })
      .catch((err) => {
        throw err;
      });
  };
};

export const incrementIngredient = (index) => {
  return async (dispatch) => {
    dispatch({ type: INCREMENT_INGREDIENT, index });
  };
};
export const decrementIngredient = (index) => {
  return async (dispatch) => {
    dispatch({ type: DECREMENT_INGREDIENT, index });
  };
};
