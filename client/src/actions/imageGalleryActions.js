import axios from "axios";

import { IMAGE_GALLERY_FETCH } from "./types";

export const fetchImages = () => {
  return async dispatch => {
    try {
      const response = await axios.get("http://localhost:3001/api/images/");
      const items = response.data.results.map(r => {
        return r.urls.small;
      });
      dispatch({ type: IMAGE_GALLERY_FETCH, payload: items });
    } catch (err) {
      alert(err);
    }
  };
};

export const selectImage = () => {

};