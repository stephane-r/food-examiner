import React, { Component } from "react";
import { connect } from "react-redux";
import InfiniteScroll from "react-infinite-scroller";

import { fetchImages } from "../../../actions/imageGalleryActions";
import "./index.css";
import ImageGalleryBox from "./ImageGalleryBox";

class ImageGallery extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return this.renderWithInfiniteScroll();
  }

  renderWithInfiniteScroll = () => {
    return (
      <div style={{ height: '700px', overflow: 'auto' }}>
        <InfiniteScroll
          pageStart={0}
          loadMore={this.props.fetchImages}
          hasMore={true}
          loader={<div>Loading ...</div>}
          useWindow={false}
        >
          <div className="image-gallery">{this._renderItems()}</div>
        </InfiniteScroll>
      </div>
    );
  };

  _renderItems = () => {
    return this.props.images.map((i, index) => {
      return <ImageGalleryBox image={i} key={index} />;
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
