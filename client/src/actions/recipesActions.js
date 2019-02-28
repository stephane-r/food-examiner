import { RECIPES_FETCH, RECIPES_CLEAR, RECIPES_TOGGLE_MODAL, RECIPES_SET_REQUEST_QUERIES } from "./types";
import axios from "axios";

import toast from "react-toastify";

export const setRecipesRequestQueries = (queries) => {
  return {
    type: RECIPES_SET_REQUEST_QUERIES,
    payload: queries
  }
};

export const clearRecipes = () => {
  return { type: RECIPES_CLEAR };
}

export const fetchRecipes = (keyword = '', page = 1) => {
  return async dispatch => {
    try {
      const response = await axios.get(`http://localhost:3001/api/recipes?keyword=${keyword}&page=${page}`);
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