import React, { Component } from "react";

import FoodRecognitionForm from "./FoodRecognitionForm/FoodRecognitionForm";
import FoodRecognitionContent from "./FoodRecognitionContent/FoodRecognitionContent";
import RecipesModal from "./RecipesModal/RecipesModal";

export default class FoodRecognition extends Component {
  render() {
    return (
      <div style={{ marginTop: "20px", paddingBottom: "20px" }} className="food-recognition-container">
        <FoodRecognitionForm />
        <FoodRecognitionContent />
        <RecipesModal />
      </div>
    );
  }
}
