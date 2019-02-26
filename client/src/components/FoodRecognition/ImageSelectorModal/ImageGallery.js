import React, { Component } from "react";
import { connect } from 'react-redux';

import { fetchImages } from '../../../actions/imageGalleryActions';
import "./index.css";
import ImageGalleryBox from "./ImageGalleryBox";

class ImageGallery extends Component {
  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    this.props.fetchImages();
  }

  render() {
    return <div className="image-gallery">{this._renderItems(this.props.images)}</div>;
  }

  _renderItems = images => {
    return images.map(i => {
      return <ImageGalleryBox image={i} key={i.id} />;
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