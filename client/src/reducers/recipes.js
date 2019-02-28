import { RECIPES_FETCH, RECIPES_TOGGLE_MODAL } from "../actions/types";

const defaultState = {
  recipes: [],
  recipesPending: false,
  modalIsOpen: false
};

const recipes = (state = defaultState, action) => {
  switch (action.type) {
    case RECIPES_FETCH:
      return {
        ...state,
        recipes: action.payload
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
