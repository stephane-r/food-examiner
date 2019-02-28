import React, { Component } from "react";
import { connect } from "react-redux";
import InfiniteScroll from "react-infinite-scroller";

import Spinner from "react-spinkit";

import RecipeBox from './RecipeBox';
import { fetchRecipes } from "../../../actions/recipesActions";

class Recipes extends Component {
  render() {
    return (
      <div
        style={{
          height: "400px",
          overflowY: "auto",
          padding: "10px"
        }}
      >
        <InfiniteScroll
          loadMore={() => {
            console.log(this.props.queryKeyword);
            this.props.fetchRecipes(this.props.queryKeyword);
          }}
          hasMore={true}
          loader={this._renderLoader()}
          useWindow={false}
        >
          <div className="recipes">{this._renderRecipes()}</div>
        </InfiniteScroll>
      </div>
    );
  }

  _renderRecipes = () => {
    return this.props.recipes.map((r, i) => {
      return <RecipeBox recipe={r} key={i} />;
    });
  };

  _renderLoader = () => {
    return (
      <div
        key={"recipes-loading-indicator"}
        className="d-flex justify-content-center"
        style={{ margin: "20px auto" }}
      >
        <Spinner name="line-scale" color="#2C3E50" fadeIn="none" />
      </div>
    );
  };
}

const mapStateToProps = (state) => {
    return {
        ...state.recipes
    };
};

export default connect(mapStateToProps, { fetchRecipes })(Recipes);
