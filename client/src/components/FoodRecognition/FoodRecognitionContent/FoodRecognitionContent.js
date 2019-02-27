import React, { Component } from "react";
import { connect } from 'react-redux';

import ImageContainer from './ImageContainer';
import PredictionsList from "./PredictionsList";
import './index.css';

class FoodRecognitionContent extends Component {

  render() {
    return (
      <div className="d-flex rounded border border-success food-recognition-content">
        <ImageContainer imageSrc={this.props.imageSrc} imageAuthorName={this.props.imageAuthorName} imageAuthorUrl={this.props.imageAuthorUrl} />
        <PredictionsList predictions={this.props.predictions} predictionsPending={this.props.predictionsPending} />
      </div>
    );
  }

}

const mapStateToProps = state => {
  const { imageSrc, predictions, predictionsPending, imageAuthorName, imageAuthorUrl } = state.foodRecognition;
  return {
    imageSrc, predictions, predictionsPending, imageAuthorName, imageAuthorUrl
  };
}

export default connect(
  mapStateToProps
)(FoodRecognitionContent)