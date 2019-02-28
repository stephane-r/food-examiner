import { RECIPES_FETCH, RECIPES_TOGGLE_MODAL, RECIPES_SET_QUERY_KEYWORD } from "./types";
import axios from "axios";

import toast from "react-toastify";

export const setRecipesQueryKeyword = (keyword) => {
  return {
    type: RECIPES_SET_QUERY_KEYWORD,
    payload: keyword
  }
};

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