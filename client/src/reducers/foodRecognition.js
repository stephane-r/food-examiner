import {
  FOOD_RECOGNITION_FETCH_PREDICTIONS,
  FOOD_RECOGNITION_FETCH_PREDICTIONS_PENDING,
  FOOD_RECOGNITION_IMAGE_LINK_FIELD_UPDATED,
  FOOD_RECOGNITION_IMAGE_LINK_FIELD_ERROR,
  FOOD_RECOGNITION_UPDATE_IMAGE_SRC,
  FOOD_RECOGNITION_GO_TO_STAGE_1,
  FOOD_RECOGNITION_GO_TO_STAGE_2,
  FOOD_RECOGNITION_GO_TO_STAGE_3
} from "../actions/types";

const defaultState = {
  imageLinkInputValue:
    "https://images.unsplash.com/photo-1532980400857-e8d9d275d858?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
  imageSrc:
    "https://images.unsplash.com/photo-1532980400857-e8d9d275d858?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
  imageLinkFieldError: null,
  predictions: [
    {
      name: "blueberries",
      value: 0.9
    },
    {
      name: "waffle",
      value: 0.85
    },
    {
      name: "cake",
      value: 0.75
    },
    {
      name: "oil",
      value: 0.65
    },
    {
      name: "steak",
      value: 0.4
    }
  ],
  predictionsPending: false,
  stage: 1
};

const foodRecognition = (state = defaultState, action) => {
  switch (action.type) {
    case FOOD_RECOGNITION_IMAGE_LINK_FIELD_UPDATED:
      return { ...state, imageLinkInputValue: action.payload, imageLinkFieldError: null };

    case FOOD_RECOGNITION_UPDATE_IMAGE_SRC:
      return {
        ...state,
        imageSrc: action.payload
      };

    case FOOD_RECOGNITION_FETCH_PREDICTIONS_PENDING:
      return {
        ...state,
        predictionsPending: true
      };

    case FOOD_RECOGNITION_IMAGE_LINK_FIELD_ERROR:
      return {
        ...state,
        imageLinkFieldError: action.payload
      }

    case FOOD_RECOGNITION_FETCH_PREDICTIONS:
      return {
        ...state,
        predictionsPending: false,
        predictions: action.payload,
        stage: 1
      };

    case FOOD_RECOGNITION_GO_TO_STAGE_1:
      return {
        ...state,
        stage: 1
      };

    case FOOD_RECOGNITION_GO_TO_STAGE_2:
      return {
        ...state,
        stage: 2
      };

    case FOOD_RECOGNITION_GO_TO_STAGE_3:
      return {
        ...state,
        stage: 3
      };

    default:
      return state;
  }
};

export default foodRecognition;
