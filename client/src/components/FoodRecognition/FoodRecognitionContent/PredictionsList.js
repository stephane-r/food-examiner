import React from "react";
import Spinner from "react-spinkit";

import Prediction from './Prediction';

export default function PredictionsList({
  predictions,
  predictionsPending = false
}) {
  return (
    <div className="food-recognition-content__predictions">
      <div
        className="d-flex justify-content-start border-bottom"
        style={{ padding: "0.75rem" }}
      >
        <div style={{ minWidth: '120px' }}>Prediction</div>
        <div>Probability</div>
      </div>
      {renderItems(predictions, predictionsPending)}
    </div>
  );
}

function renderItems(predictions, predictionsPending) {
  
  if (predictionsPending) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '400px' }}>
        <Spinner name="ball-scale-multiple" fadeIn={'none'} />
      </div>
    );
  }

  if (!predictions) {
    return <div />;
  }
  console.log(predictions);
  return predictions.map((p, i) => {
    return <Prediction prediction={p} key={i} />
  });
}