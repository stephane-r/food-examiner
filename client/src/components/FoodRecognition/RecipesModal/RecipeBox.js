import React, { Component } from "react";

export default class RecipeBox extends Component {
  render() {
    const { title } = this.props.recipe;
    return (
      <div className="recipe-box" style={{ flexBasis: '32%'}} >
        <h5 className="border-bottom" style={{ padding: '10px' }}>{title}</h5>
        <div className="d-flex justify-content-start flex-wrap" style={{ padding: '5px' }}>
          <span className="badge badge-primary" style={{ margin: '5px' }}>Primary</span>
          <span className="badge badge-primary" style={{ margin: '5px' }}>Primary</span>
          <span className="badge badge-primary" style={{ margin: '5px' }}>Primary</span>
          <span className="badge badge-primary" style={{ margin: '5px' }}>Primary</span>
          <span className="badge badge-primary" style={{ margin: '5px' }}>Primary</span>
          <span className="badge badge-primary" style={{ margin: '5px' }}>Primary</span>
          <span className="badge badge-primary" style={{ margin: '5px' }}>Primary</span>
        </div>
      </div>
    );
  }
}
