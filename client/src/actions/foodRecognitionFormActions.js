import { toast } from "react-toastify";

import {
  FOOD_RECOGNITION_FETCH_PREDICTIONS,
  FOOD_RECOGNITION_FETCH_PREDICTIONS_PENDING,
  FOOD_RECOGNITION_IMAGE_LINK_FIELD_UPDATED,
  FOOD_RECOGNITION_IMAGE_LINK_FIELD_ERROR,
  FOOD_RECOGNITION_UPDATE_IMAGE_SRC,
  FOOD_RECOGNITION_FORM_SET_IMAGE,
  FOOD_RECOGNITION_SET_GOOGLE_RECAPTCHA_VALUE,
  FOOD_RECOGNITION_GET_RANDOM_IMAGE_PENDING,
  FOOD_RECOGNITION_GET_RANDOM_IMAGE_SUCCESS,
  FOOD_RECOGNITION_GO_TO_STAGE_1,
  FOOD_RECOGNITION_GO_TO_STAGE_2,
  FOOD_RECOGNITION_GO_TO_STAGE_3
} from "./types";
import unsplashApi from '../api/unsplashApi';
import clarifaiApi from "../api/clarifaiApi";

export const updateImageLinkInput = text => {
  return {
    type: FOOD_RECOGNITION_IMAGE_LINK_FIELD_UPDATED,
    payload: text
  };
};

export const submitFoodRecognitionForm = (imageLink = "", googleRecaptchaValue = "") => {
  return async dispatch => {
    if (!imageLink) {
      dispatch({
        type: FOOD_RECOGNITION_IMAGE_LINK_FIELD_ERROR,
        payload: "Please provide an image link"
      });
      return;
    }

    try {
      dispatch({ type: FOOD_RECOGNITION_UPDATE_IMAGE_SRC, payload: imageLink });
      dispatch({ type: FOOD_RECOGNITION_FETCH_PREDICTIONS_PENDING });
      const predictions = await clarifaiApi.predictFoodImage({ imageLink, googleRecaptchaValue });
      dispatch({
        type: FOOD_RECOGNITION_FETCH_PREDICTIONS,
        payload: predictions
      });
      
    } catch (error) {
      toast.error(error);
      dispatch({ type: FOOD_RECOGNITION_GO_TO_STAGE_1 });
    }
  };
};

export const updateGoogleRecaptchaValue = (value) => {
  return {
    type: FOOD_RECOGNITION_SET_GOOGLE_RECAPTCHA_VALUE,
    payload: value
  }
}

export const foodRecognitionGetRandomImage = () => {
  return async dispatch => {

    dispatch({ type: FOOD_RECOGNITION_GET_RANDOM_IMAGE_PENDING });

    try {
      const payload = await unsplashApi.getRandomImage();
      dispatch({
        type: FOOD_RECOGNITION_FORM_SET_IMAGE,
        payload
      });

      dispatch({ type: FOOD_RECOGNITION_GET_RANDOM_IMAGE_SUCCESS });

    } catch (err) {
      toast.error(err.response.data.err.toString());
    }
  };
};

export const foodRecognitionGoToStage1 = () => {
  return { type: FOOD_RECOGNITION_GO_TO_STAGE_1 };
};

export const foodRecognitionGoToStage2 = () => {
  return { type: FOOD_RECOGNITION_GO_TO_STAGE_2 };
};

export const foodRecognitionGoToStage3 = () => {
  return { type: FOOD_RECOGNITION_GO_TO_STAGE_3 };
};
