import { RECIPES_FETCH, RECIPES_TOGGLE_MODAL, RECIPES_SET_QUERY_KEYWORD } from "../actions/types";

const defaultState = {
  recipes: [],
  recipesPending: false,
  modalIsOpen: false,
  queryKeyword: ''
};

const recipes = (state = defaultState, action) => {
  switch (action.type) {

    case RECIPES_SET_QUERY_KEYWORD:
      return {
        ...state,
        queryKeyword: action.payload
      };

    case RECIPES_FETCH:
      return {
        ...state,
        recipes: [
          ...state.recipes,
          ...action.payload
        ]
      };

    case RECIPES_TOGGLE_MODAL:
      return {
        ...state,
        modalIsOpen: !state.modalIsOpen
      }

    default:
      return state;
  }
};

export default recipes;
