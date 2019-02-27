import axios from "axios";
import { toast } from "react-toastify";

import {
  IMAGE_GALLERY_FETCH,
  FOOD_RECOGNITION_FORM_SET_IMAGE,
  IMAGE_GALLERY_TOGGLE_MODAL,
  IMAGE_GALLERY_CLOSE_MODAL
} from "./types";

export const fetchImages = (page = 1) => {
  return async dispatch => {
    try {
      const response = await axios.get(
        `http://localhost:3001/api/images?page=${page}`
      );
      const results = response.data.results.map(r => {
        return {
          id: r.id,
          urls: r.urls,
          authorName: r.user.name,
          authorUrl: r.user.links.html
        };
      });
      dispatch({ type: IMAGE_GALLERY_FETCH, payload: results });
    } catch (err) {
      toast.error(err.response.data.err.toString());
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
