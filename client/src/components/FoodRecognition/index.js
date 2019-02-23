import React, { Component } from "react";
import FoodRecognitionForm from "./FoodRecognitionForm";
import FoodRecognitionContent from "./FoodRecognitionContent";

export default class FoodRecognition extends Component {
  render() {
    return (
      <div style={{ marginTop: "20px", marginBottom: "20px" }}>
        <FoodRecognitionForm />
        <FoodRecognitionContent />
      </div>
    );
  }
}
