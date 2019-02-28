import { combineReducers } from 'redux';
import foodRecognition from './foodRecognition';
import imageGallery from './imageGallery';
import recipes from './recipes';

export default combineReducers({
    foodRecognition,
    imageGallery,
    recipes
})