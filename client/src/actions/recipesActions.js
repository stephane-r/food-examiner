import {
  RECIPES_FETCH,
  RECIPES_CLEAR,
  RECIPES_TOGGLE_MODAL,
  RECIPES_SET_REQUEST_QUERIES,
  RECIPES_FETCH_ERROR
} from "./types";
import toast from "react-toastify";

import recipePuppyApi from "../api/recipePuppyApi";

export const setRecipesRequestQueries = queries => {
  return {
    type: RECIPES_SET_REQUEST_QUERIES,
    payload: queries
  };
};

export const clearRecipes = () => {
  return { type: RECIPES_CLEAR };
};

export const fetchRecipes = (keyword = "", page = 1) => {
  return async dispatch => {
    try {
      const recipes = await recipePuppyApi.getRecipes({ keyword, page });
      dispatch({
        type: RECIPES_FETCH,
        payload: recipes
      });
    } catch (err) {
      dispatch({ type: RECIPES_FETCH_ERROR });
      toast.error(err.toString());
    }
  };
};

export const toggleRecipeModal = () => {
  return {
    type: RECIPES_TOGGLE_MODAL
  };
};
