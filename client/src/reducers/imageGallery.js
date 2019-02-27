import { IMAGE_GALLERY_FETCH, IMAGE_GALLERY_SELECT_IMAGE } from "../actions/types";

const defaultState = {
  images: [],
  imageGalleryPage: 1
};

const imageGallery = (state = defaultState, action) => {
  switch (action.type) {
    case IMAGE_GALLERY_FETCH:
      return {
        ...state,
        images: [
          ...state.images,
          ...action.payload,
        ],
        imageGalleryPage: state.imageGalleryPage + 1
      };

    default:
      return state;
  }
};

export default imageGallery;
