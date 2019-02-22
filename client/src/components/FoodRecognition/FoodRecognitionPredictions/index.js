import React from "react";
import './index.css';

export default function FoodRecognitionPredictions({ predictions }) {
  return (
    <div className="food-recognition-content__predictions">
      <div
        className="d-flex justify-content-between border-bottom"
        style={{ padding: "0.75rem" }}
      >
        <div>Prediction</div>
        <div>Probability</div>
      </div>
      {renderItems(predictions)}
    </div>
  );
}

function renderItems(predictions) {
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
    return "text-warning";
  }
  return "text-muted";
}
