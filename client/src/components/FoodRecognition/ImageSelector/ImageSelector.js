import React, { Component } from "react";

import ImageGallery from './ImageGallery';

export default class ImageSelector extends Component {
  render() {
    return (
      <div
        className="d-flex flex-column justify-content-start"
        style={{ maxHeight: "500px", height: '500px' }}
      >
        <ImageGallery />
        <div className="d-flex justify-content-end align-items-center" style={{ flexBasis: "10%", minHeight: '10%' }}>
            <button className="btn btn-info" style={{ marginRight: '10px' }}>Select</button>
            <button className="btn btn-secondary" style={{ marginRight: '10px' }}>Cancel</button>
        </div>
      </div>
    );
  }
}
