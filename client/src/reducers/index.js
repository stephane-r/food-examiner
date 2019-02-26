import { combineReducers } from 'redux';
import foodRecognition from './foodRecognition';
import imageGallery from './imageGallery';

export default combineReducers({
    foodRecognition,
    imageGallery
})