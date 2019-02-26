import { IMAGE_GALLERY_FETCH, IMAGE_GALLERY_SELECT_IMAGE } from "../actions/types";

const defaultState = {
  images: []
};

const imageGallery = (state = defaultState, action) => {
  switch (action.type) {
    case IMAGE_GALLERY_FETCH:
      return {
        ...state,
        images: action.payload
      };

    default:
      return state;
  }
};

export default imageGallery;
