import React, { Component } from "react";
import FoodRecognitionForm from "./FoodRecognitionForm";
import FoodRecognitionContent from "./FoodRecognitionContent";

export default class FoodRecognition extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageSrc: "",
      predictions: null,
      imageLink: ""
    };
  }

  render() {
    return (
      <div style={{ marginTop: "20px", marginBottom: "20px" }}>
        <FoodRecognitionForm value={this.state.imageLink} onFormSubmit={this._onFormSubmit} onInputFieldUpdated={this._onImageLinkFieldUpdated} />
        <FoodRecognitionContent imageSrc={this.state.imageSrc} predictions={this.state.predictions}  />
      </div>
    );
  }

  _onImageLinkFieldUpdated = e => {
    this.setState({ imageLink: e.target.value });
  };

  _onFormSubmit = async e => {
    e.preventDefault();
    this.setState({
      imageSrc: this.state.imageLink
    });

    const url = "http://localhost:3001/foodImageRecognition/";
    try {
      const response = await fetch(url, {
        method: "POST", 
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ imageLink: this.state.imageLink })
      })
      const data = await response.json();
      const predictions = data.outputs[0].data.concepts;
      this.setState({ predictions });
    } catch (err) {
      console.log(err);
      alert(err);
    }
  };
}
