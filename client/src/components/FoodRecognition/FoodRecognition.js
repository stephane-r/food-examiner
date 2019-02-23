import React, { Component } from "react";

import "./index.css";
import FoodRecognitionForm from "./FoodRecognitionForm/FoodRecognitionForm";
import FoodRecognitionContent from "./FoodRecognitionContent/FoodRecognitionContent";


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
