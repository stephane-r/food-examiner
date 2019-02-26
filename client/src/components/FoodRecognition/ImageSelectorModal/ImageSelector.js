import React, { Component } from "react";

import ImageGallery from './ImageGallery';

export default class ImageSelector extends Component {
  render() {
    return (
      <div
        className="d-flex flex-column justify-content-start"
        style={{ maxHeight: "450px", height: '450px' }}
      >
        <ImageGallery />
      </div>
    );
  }
}
