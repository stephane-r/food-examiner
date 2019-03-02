import React, { Component } from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook } from '@fortawesome/free-solid-svg-icons'

import { toggleRecipeModal, setRecipesRequestQueries, clearRecipes } from '../../../actions/recipesActions';

class Prediction extends Component {
  render() {
    const { value, name } = this.props.prediction;
    return (
      <div
        style={{ padding: "0.75rem", alignItems: 'center' }}
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
          <span style={{ marginRight: '5px' }}><FontAwesomeIcon icon={faBook} /></span>Recipes
        </button>
      </div>
    );
  }

  _openRecipeModal = (keyword) => {
    this.props.clearRecipes();
    this.props.setRecipesRequestQueries({keyword, page: 1});
    this.props.toggleRecipeModal();
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
  { toggleRecipeModal, clearRecipes, setRecipesRequestQueries }
)(Prediction);
