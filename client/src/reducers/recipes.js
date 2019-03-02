import {
  RECIPES_FETCH,
  RECIPES_CLEAR,
  RECIPES_TOGGLE_MODAL,
  RECIPES_SET_REQUEST_QUERIES,
  RECIPES_FETCH_ERROR
} from "../actions/types";

const defaultState = {
  recipes: [],
  recipesPending: false,
  modalIsOpen: false,
  queries: {
    keyword: "",
    page: 1
  },
  hasMoreRecipesToLoad: true
};

const recipes = (state = defaultState, action) => {
  switch (action.type) {
    case RECIPES_SET_REQUEST_QUERIES:
      return {
        ...state,
        queries: action.payload
      };

    case RECIPES_CLEAR:
      return {
        ...state,
        recipes: []
      };

    case RECIPES_FETCH:
      const hasMoreRecipesToLoad = (action.payload && action.payload.length > 0) 
      ? true 
      : false;
      return {
        ...state,
        recipes: [...state.recipes, ...action.payload],
        queries: {
          ...state.queries,
          page: state.queries.page + 1
        },
        hasMoreRecipesToLoad
      };

    case RECIPES_FETCH_ERROR:
      return {
        ...state,
        hasMoreRecipesToLoad: false
      }

    case RECIPES_TOGGLE_MODAL:
      return {
        ...state,
        modalIsOpen: !state.modalIsOpen
      };

    default:
      return state;
  }
};

export default recipes;
