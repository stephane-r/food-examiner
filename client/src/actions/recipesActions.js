import { RECIPES_FETCH, RECIPES_TOGGLE_MODAL } from "./types";
import axios from "axios";

import toast from "react-toastify";

export const fetchRecipes = (keyword = '') => {
  return async dispatch => {
    try {
      const response = await axios.get(`http://localhost:3001/api/recipes?keyword=${keyword}`);
      const { data } = response;
      const recipes = data.results.map((r) => {
        return {
          ...r,
          ingredients: r.ingredients.split(",").map(s => s.trimStart(" "))
        }
      });
      dispatch({
        type: RECIPES_FETCH,
        payload: recipes
      });
    } catch (err) {
      toast.error(err.toString());
    }
  };
};

export const toggleRecipeModal = () => {
  return {
    type: RECIPES_TOGGLE_MODAL
  };
}