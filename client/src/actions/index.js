import axios from "axios";
import { toast } from "react-toastify";

import {
  FOOD_RECOGNITION_FETCH_PREDICTIONS,
  FOOD_RECOGNITION_FETCH_PREDICTIONS_PENDING,
  FOOD_RECOGNITION_IMAGE_LINK_FIELD_UPDATED,
  FOOD_RECOGNITION_IMAGE_LINK_FIELD_ERROR,
  FOOD_RECOGNITION_UPDATE_IMAGE_SRC,
  FOOD_RECOGNITION_GET_IMAGE,
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

export const submitFoodRecognitionForm = (imageLink = "") => {
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

      const url = "http://localhost:3001/api/foodImageRecognition/";
      const response = await axios.post(url, {
        imageLink,
        googleRecaptchaValue: ""
      });
      const predictions = response.data.outputs[0].data.concepts;

      dispatch({
        type: FOOD_RECOGNITION_FETCH_PREDICTIONS,
        payload: predictions
      });
    } catch (err) {
      toast.error(err.response.data.err);
      dispatch({ type: FOOD_RECOGNITION_GO_TO_STAGE_1 });
    }
  };
};

export const foodRecognitionGetRandomImage = () => {
  return async dispatch => {
    try {
      const url = "http://localhost:3001/api/images/random";
      const response = await axios.get(url, {});

      const { data } = response;
      const imageUrl = data.urls.regular;
      const imageAuthorUrl = data.user.links.html;
      const imageAuthorName = data.user.name;
      const payload = {
        imageUrl,
        imageAuthorUrl,
        imageAuthorName
      };

      dispatch({
        type: FOOD_RECOGNITION_GET_IMAGE,
        payload
      });
    } catch (err) {
      toast.error(err.response.data.err[0]);
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
