import React, { Component } from "react";
import FoodRecognitionForm from "./FoodRecognitionForm";
import FoodRecognitionContent from "./FoodRecognitionContent";

export default class FoodRecognition extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageLinkFieldError: null
    };
  }

  render() {
    return (
      <div style={{ marginTop: "20px", marginBottom: "20px" }}>
        <FoodRecognitionForm
          imageLinkFieldError={this.state.imageLinkFieldError}
        />
        <FoodRecognitionContent />
      </div>
    );
  }

}
