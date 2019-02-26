import axios from "axios";

import { IMAGE_GALLERY_FETCH, IMAGE_GALLERY_SELECT_IMAGE } from "./types";

export const fetchImages = () => {
  return async dispatch => {
    try {
      const response = await axios.get("http://localhost:3001/api/images/");
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

export const selectImage = (imageUrl, authorUrl, authorName) => {
  return {
    type: IMAGE_GALLERY_SELECT_IMAGE,
    payload: {
      imageUrl, authorUrl, authorName
    }
  }
};