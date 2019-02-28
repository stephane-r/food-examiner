import React, { Component } from "react";

export default class RecipeBox extends Component {
  render() {
    const { title, href } = this.props.recipe;
    return (
      <div className="recipe-box" style={{ flexBasis: "32%" }}>
        <h5 className="border-bottom" style={{ padding: "10px" }}>
          <a href={href} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </h5>
        <div
          className="d-flex justify-content-start flex-wrap"
          style={{ padding: "5px" }}
        >
          {this._renderIngredients()}
        </div>
      </div>
    );
  }

  _renderIngredients = () => {
    return this.props.recipe.ingredients.map((i, index) => {
      return (
        <span
          className="badge badge-light"
          style={{ margin: "5px" }}
          key={index}
        >
          {i}
        </span>
      );
    });
  };
}
