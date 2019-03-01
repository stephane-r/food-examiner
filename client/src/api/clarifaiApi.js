import axios from "axios";

import apiBaseUrl from './apiBaseUrl';

const clarifaiApi = {
  predictFoodImage: async ({ imageLink = "", googleRecaptchaValue = "" }) => {
    try {
      const url = `${apiBaseUrl}/api/foodImageRecognition/`;
      const response = await axios.post(url, {
        imageLink,
        googleRecaptchaValue
      });
      const predictions = response.data.outputs[0].data.concepts;
      return predictions;
    } catch (err) {
      throw err.response.data.err.toString();
    }
  }
};

export default clarifaiApi;
