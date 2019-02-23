import {
  FOOD_RECOGNITION_FETCH_PREDICTIONS,
  FOOD_RECOGNITION_FETCH_PREDICTIONS_PENDING,
  FOOD_RECOGNITION_IMAGE_LINK_FIELD_UPDATED,
  FOOD_RECOGNITION_GO_TO_STAGE_1,
  FOOD_RECOGNITION_GO_TO_STAGE_2,
  FOOD_RECOGNITION_GO_TO_STAGE_3
} from "./types";

export const updateImageLinkInput = text => {
  return {
    type: FOOD_RECOGNITION_IMAGE_LINK_FIELD_UPDATED,
    payload: text
  };
};

export const setVisibilityFilter = filter => ({
  type: "SET_VISIBILITY_FILTER",
  filter
});

export const toggleTodo = id => ({
  type: "TOGGLE_TODO",
  id
});
