import { IMAGE_GALLERY_FETCH, IMAGE_GALLERY_TOGGLE_MODAL, IMAGE_GALLERY_CLOSE_MODAL, IMAGE_GALLERY_FETCH_FAILURE } from "../actions/types";

const defaultState = {
  images: [],
  imageGalleryPage: 1,
  modalIsOpen: false,
  hasMoreImagesToLoad: true
};

const imageGallery = (state = defaultState, action) => {
  switch (action.type) {
    case IMAGE_GALLERY_FETCH:
      const { totalPages, results } = action.payload;
      const nextPage = state.imageGalleryPage + 1;
      const hasMoreImagesToLoad = nextPage === totalPages ? false : true;
      return {
        ...state,
        images: [
          ...state.images,
          ...results,
        ],
        hasMoreImagesToLoad,
        imageGalleryPage: nextPage
      };

    case IMAGE_GALLERY_FETCH_FAILURE:
      return {

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
