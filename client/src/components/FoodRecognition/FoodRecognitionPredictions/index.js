import React from "react";
import "./index.css";
import Spinner from "react-spinkit";

export default function FoodRecognitionPredictions({
  predictions,
  predictionsPending = false
}) {
  return (
    <div className="food-recognition-content__predictions">
      <div
        className="d-flex justify-content-between border-bottom"
        style={{ padding: "0.75rem" }}
      >
        <div>Prediction</div>
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
  return predictions.map((p, i) => {
    return (
      <div
        style={{ padding: "0.75rem" }}
        key={i}
        className={`d-flex justify-content-between border-bottom ${determineTextColor(
          p.value
        )}`}
      >
        <div>{p.name}</div>
        <div>{parseFloat(p.value).toFixed(2)}</div>
      </div>
    );
  });
}

function determineTextColor(value) {
  if (value > 0.8) {
    return "text-success";
  }
  if (value > 0.6) {
    return "text-info";
  }
  return "text-warning";
}
