import axios from 'axios';
import { toast } from "react-toastify";

import {
  FOOD_RECOGNITION_FETCH_PREDICTIONS,
  FOOD_RECOGNITION_FETCH_PREDICTIONS_PENDING,
  FOOD_RECOGNITION_IMAGE_LINK_FIELD_UPDATED,
  FOOD_RECOGNITION_UPDATE_IMAGE_SRC,
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

export const submitFoodRecognitionForm = (imageLink = '') => {
  return async dispatch => {
    try {
      dispatch({ type: FOOD_RECOGNITION_UPDATE_IMAGE_SRC, payload: imageLink })
      dispatch({ type: FOOD_RECOGNITION_FETCH_PREDICTIONS_PENDING });

      const url = "http://localhost:3001/foodImageRecognition/";
      const response = await axios.post(url, {
        imageLink,
        googleRecaptchaValue: ""
      });
      const predictions = response.data.outputs[0].data.concepts;

      dispatch({ type: FOOD_RECOGNITION_FETCH_PREDICTIONS, payload: predictions });
      
    } catch (err) {
      toast.error(err.response.data.err);
      dispatch({ type: FOOD_RECOGNITION_GO_TO_STAGE_1 });
    }
  };
};

export const foodRecognitionGoToStage1 = () => {
  return ({ type: FOOD_RECOGNITION_GO_TO_STAGE_1 });
}

export const foodRecognitionGoToStage2 = () => {
  return ({ type: FOOD_RECOGNITION_GO_TO_STAGE_2 });
}

export const foodRecognitionGoToStage3 = () => {
  return ({ type: FOOD_RECOGNITION_GO_TO_STAGE_3 });
}