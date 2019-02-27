import axios from "axios";

const clarifaiApi = {
  predictFoodImage: async ({ imageLink = "", googleRecaptchaValue = "" }) => {
    try {
      const url = "http://localhost:3001/api/foodImageRecognition/";
      const response = await axios.post(url, {
        imageLink,
        googleRecaptchaValue
      });
      const predictions = response.data.outputs[0].data.concepts;
      return predictions;
    } catch (err) {
      return err.response.data.err.toString();
    }
  }
};

export default clarifaiApi;
