import React, { Component } from "react";
import FoodRecognitionForm from "./FoodRecognitionForm";
import FoodRecognitionContent from "./FoodRecognitionContent";
import { toast } from "react-toastify";
import "./index.css";
import axios from "axios";

export default class FoodRecognition extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageSrc: "",
      predictions: null,
      predictionsPending: false,
      imageLink: "",
      stage: 1,
      googleRecaptchaValue: null
    };
  }

  render() {
    return (
      <div style={{ marginTop: "20px", marginBottom: "20px" }}>
        <FoodRecognitionForm
          value={this.state.imageLink}
          onFormSubmit={this._onFormSubmit}
          onInputFieldUpdated={this._onImageLinkFieldUpdated}
          predictionsPending={this.state.predictionsPending}
          stage={this.state.stage}
          onSupplyNewImageButtonClicked={this._onSupplyNewImageButtonClicked}
          onReCaptchaCompleted={this._onReCaptchaCompleted}
        />
        <FoodRecognitionContent
          imageSrc={this.state.imageSrc}
          predictions={this.state.predictions}
          predictionsPending={this.state.predictionsPending}
        />
      </div>
    );
  }

  _onImageLinkFieldUpdated = e => {
    this.setState({ imageLink: e.target.value });
  };

  _onFormSubmit = async e => {
    e.preventDefault();
    this.setState({
      imageSrc: this.state.imageLink,
      predictionsPending: true
    });

    const url = "http://localhost:3001/foodImageRecognition/";
    try {
      const response = await axios.post(url, {
        imageLink: this.state.imageLink,
        googleRecaptchaValue: this.state.googleRecaptchaValue
      });

      console.log(response);
      const predictions = response.data.outputs[0].data.concepts;
      this.setState({ predictions, predictionsPending: false });

    } catch (err) {
      toast.error(err.response.data.err);
      this.setState({ predictionsPending: false });
    }
  };

  _onSupplyNewImageButtonClicked = () => {
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
