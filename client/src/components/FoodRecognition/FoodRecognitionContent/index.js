import React, { Component } from "react";
import { connect } from 'react-redux';

import "./index.css";
import ImageContainer from './ImageContainer';
import PredictionsList from "./PredictionsList";

class FoodRecognitionContent extends Component {

  render() {
    return (
      <div className="d-flex rounded border border-success food-recognition-content">
        <ImageContainer imageSrc={this.props.imageSrc} />
        <PredictionsList predictions={this.props.predictions} predictionsPending={this.props.predictionsPending} />
      </div>
    );
  }

}

const mapStateToProps = state => {
  const { imageSrc, predictions, predictionsPending } = state.foodRecognition;
  return {
    imageSrc, predictions, predictionsPending
  };
}

export default connect(
  mapStateToProps
)(FoodRecognitionContent)