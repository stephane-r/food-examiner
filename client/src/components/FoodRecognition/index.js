import React, { Component } from "react";
import FoodRecognitionForm from "./FoodRecognitionForm";
import FoodRecognitionContent from "./FoodRecognitionContent";
 
export default class FoodRecognition extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageSrc: "",
      predictions: null,
      predictionsPending: false,
      imageLink: "",
    };
  }

  render() {
    return (
      <div style={{ marginTop: "20px", marginBottom: "20px" }}>
        <FoodRecognitionForm value={this.state.imageLink} onFormSubmit={this._onFormSubmit} onInputFieldUpdated={this._onImageLinkFieldUpdated} predictionsPending={this.state.predictionsPending} />
        <FoodRecognitionContent imageSrc={this.state.imageSrc} predictions={this.state.predictions} predictionsPending={this.state.predictionsPending}  />
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
      const response = await fetch(url, {
        method: "POST", 
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ imageLink: this.state.imageLink })
      })
      const data = await response.json();
      const predictions = data.outputs[0].data.concepts;
      this.setState({ predictions, predictionsPending: false });
    } catch (err) {
      console.log(err);
      alert(err);
    }
  };
}
