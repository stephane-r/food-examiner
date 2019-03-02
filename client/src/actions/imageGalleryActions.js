import { toast } from "react-toastify";

import {
  IMAGE_GALLERY_FETCH,
  FOOD_RECOGNITION_FORM_SET_IMAGE,
  IMAGE_GALLERY_TOGGLE_MODAL,
  IMAGE_GALLERY_CLOSE_MODAL,
  IMAGE_GALLERY_FETCH_FAILURE
} from "./types";
import unsplashApi from '../api/unsplashApi';

export const fetchImages = (page = 1) => {
  return async dispatch => {
    try {
      const payload = await unsplashApi.getImages({ page });
      dispatch({ type: IMAGE_GALLERY_FETCH, payload });
    } catch (err) {
      toast.error(err);
      dispatch({ type: IMAGE_GALLERY_FETCH_FAILURE });
    }
  };
};

export const selectImage = (imageUrl, imageAuthorUrl, imageAuthorName) => {
  return dispatch => {
    dispatch({
      type: FOOD_RECOGNITION_FORM_SET_IMAGE,
      payload: {
        imageUrl,
        imageAuthorUrl,
        imageAuthorName
      }
    });
    dispatch({
      type: IMAGE_GALLERY_CLOSE_MODAL
    });
  };
};

export const imageGalleryToggleModal = () => {
  return { type: IMAGE_GALLERY_TOGGLE_MODAL };
};
