import { IMAGE_GALLERY_FETCH } from "../actions/types";

const defaultState = {
  imageUrls: []
};

const imageGallery = (state = defaultState, action) => {
  switch (action.type) {
    case IMAGE_GALLERY_FETCH:
      return {
        ...state,
        imageUrls: action.payload
      };

    default:
      return state;
  }
};

export default imageGallery;
