import React, { Component } from "react";
import { connect } from "react-redux";
import Spinner from "react-spinkit";
import InfiniteScroll from "react-infinite-scroller";

import { fetchImages } from "../../../actions/imageGalleryActions";
import "./index.css";
import ImageGalleryBox from "./ImageGalleryBox";

class ImageGallery extends Component {
  render() {
    return (
      <div style={{ height: "700px", overflow: "auto" }}>
        <InfiniteScroll
          loadMore={() => this.props.fetchImages(this.props.imageGalleryPage)}
          hasMore={true}
          loader={this._renderLoader()}
          useWindow={false}
        >
          <div className="image-gallery">{this._renderItems()}</div>
        </InfiniteScroll>
      </div>
    );
  }

  _renderLoader = () => {
    return (
      <div key={'image-loading-indicator'} className="d-flex justify-content-center" style={{ margin: '20px auto' }}>
        <Spinner
          name="line-scale"
          color="#2C3E50"
          fadeIn="none"
        />
      </div>
    );
  };

  _renderItems = () => {
    return this.props.images.map((i, index) => {
      return <ImageGalleryBox image={i} key={index} index={index} />;
    });
  };

  loadFunc = () => {
    console.log("Will execute load function");
  };
}

const mapStateToProps = state => {
  return {
    ...state.imageGallery
  };
};

export default connect(
  mapStateToProps,
  {
    fetchImages
  }
)(ImageGallery);
