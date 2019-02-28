import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchRecipes, toggleRecipeModal } from '../../../actions/recipesActions';

class Prediction extends Component {
  render() {
    const { value, name } = this.props.prediction;
    return (
      <div
        style={{ padding: "0.75rem" }}
        key={this.props.key}
        className={`food-recognition-content__prediction d-flex justify-content-start border-bottom ${determineTextColor(
          value
        )}`}
      >
        <div style={{ minWidth: "120px" }}>{name}</div>
        <div>{parseFloat(value).toFixed(2)}</div>
        <button style={{ marginLeft: "auto" }} className="btn btn-primary" onClick={() => {
            this._openRecipeModal(name)
        }}>
          View Recipes
        </button>
      </div>
    );
  }

  _openRecipeModal = (keyword) => {
    this.props.toggleRecipeModal();
    this.props.fetchRecipes(keyword);
  }
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

export default connect(
  null,
  { toggleRecipeModal, fetchRecipes }
)(Prediction);
