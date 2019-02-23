import React from "react";

import "./index.css";
import ImageContainer from './ImageContainer';
import PredictionsList from "./PredictionsList";


export default function FoodRecognitionContent(props) {
  return (
    <div className="d-flex rounded border border-success food-recognition-content">
      <ImageContainer imageSrc={props.imageSrc} />
      <PredictionsList predictions={props.predictions} predictionsPending={props.predictionsPending} />
    </div>
  );
}


