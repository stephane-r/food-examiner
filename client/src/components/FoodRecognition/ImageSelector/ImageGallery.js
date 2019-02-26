import React, { Component } from "react";
import { connect } from 'react-redux';

import { fetchImages } from '../../../actions/imageGalleryActions';
import "./index.css";
import ImageGalleryBox from "./ImageGalleryBox";

class ImageGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  async componentDidMount() {
    this.props.fetchImages();
  }

  render() {
    return <div className="image-gallery">{this._renderItems(this.props.imageUrls)}</div>;
  }

  _renderItems = urls => {
    return urls.map(i => {
      return <ImageGalleryBox item={i} />;
    });
  };
}

const mapStateToProps = (state) => {
  return {
    ...state.imageGallery
  };
};

export default connect(mapStateToProps, {
  fetchImages
})(ImageGallery);