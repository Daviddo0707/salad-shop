export const ingredientsReducer = (ingredients = [], action) => {
  switch (action.type) {
    case "FETCH_INGREDIENTS":
      return action.ingredients;
    case "INCREMENT_INGREDIENT":
      return ingredients.map((ingredient, index) =>
        index === action.index
          ? { ...ingredient, quantity: ingredient.quantity + 1 }
          : ingredient
      );
    case "DECREMENT_INGREDIENT":
      return ingredients.map((ingredient, index) =>
        index === action.index && ingredient.quantity > 0
          ? { ...ingredient, quantity: ingredient.quantity - 1 }
          : ingredient
      );
    default:
      return ingredients;
  }
};
