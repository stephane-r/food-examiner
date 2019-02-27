import { IMAGE_GALLERY_FETCH, IMAGE_GALLERY_TOGGLE_MODAL, IMAGE_GALLERY_CLOSE_MODAL } from "../actions/types";

const defaultState = {
  images: [],
  imageGalleryPage: 1,
  modalIsOpen: false
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

    case IMAGE_GALLERY_TOGGLE_MODAL:
      return {
        ...state,
        modalIsOpen: !state.modalIsOpen
      }

    case IMAGE_GALLERY_CLOSE_MODAL:
      return {
        ...state,
        modalIsOpen: false
      }

    default:
      return state;
  }
};

export default imageGallery;
