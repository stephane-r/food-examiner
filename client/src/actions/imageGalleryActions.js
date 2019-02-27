import axios from "axios";
import { toast } from "react-toastify";

import { IMAGE_GALLERY_FETCH, FOOD_RECOGNITION_FORM_SET_IMAGE } from "./types";

export const fetchImages = (page = 1) => {
  return async dispatch => {
    try {
      const response = await axios.get(`http://localhost:3001/api/images?page=${page}`);
      const results = response.data.results.map(r => {
        return {
          id: r.id,
          urls: r.urls,
          authorName: r.user.name,
          authorUrl: r.user.links.html
        }
      });
      dispatch({ type: IMAGE_GALLERY_FETCH, payload: results });
    } catch (err) {
      alert(err);
    }
  };
};

export const selectImage = (imageUrl, imageAuthorUrl, imageAuthorName) => {
  toast.success('Image Selected');
  return {
    type: FOOD_RECOGNITION_FORM_SET_IMAGE,
    payload: {
      imageUrl, imageAuthorUrl, imageAuthorName
    }
  }
};