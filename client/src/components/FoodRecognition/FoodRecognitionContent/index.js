import React from "react";
import "./index.css";

import FoodRecognitionPredictions from "../FoodRecognitionPredictions";

export default function FoodRecognitionContent(props) {
  return (
    <div className="d-flex rounded border border-success food-recognition-content">
      {renderImageContainer(props.imageSrc)}
      <FoodRecognitionPredictions predictions={props.predictions} predictionsPending={props.predictionsPending} />
    </div>
  );
}

function renderImageContainer(imageSrc) {
  return (
    <div className="bg-success text-center food-recognition-content__image-container">
      {renderImage(imageSrc)}
    </div>
  );
}

function renderImage(imageSrc) {
  if (imageSrc) {
    return (
      <img
        className="img-fluid"
        style={{ maxHeight: '100%', width: 'auto' }}
        src={imageSrc}
        alt="image-placeholder"
      />
    );
  }
  return <div className="bg-primary food-recognition-content__image" />;
}
