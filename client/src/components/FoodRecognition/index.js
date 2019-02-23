import React, { Component } from "react";
import FoodRecognitionForm from "./FoodRecognitionForm";
import FoodRecognitionContent from "./FoodRecognitionContent";

export default class FoodRecognition extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stage: 3,
      googleRecaptchaValue: null,
      imageLinkFieldError: null
    };
  }

  render() {
    return (
      <div style={{ marginTop: "20px", marginBottom: "20px" }}>
        <FoodRecognitionForm
          stage={this.state.stage}
          onProvideNewImageButtonClicked={this._onProvideNewImageButtonClicked}
          onReCaptchaCompleted={this._onReCaptchaCompleted}
          imageLinkFieldError={this.state.imageLinkFieldError}
        />
        <FoodRecognitionContent />
      </div>
    );
  }

  _onProvideNewImageButtonClicked = () => {
    this.setState({
      stage: 2
    });
  };

  _onReCaptchaCompleted = value => {
    this.setState({
      stage: 3,
      googleRecaptchaValue: value
    });
  };
}
