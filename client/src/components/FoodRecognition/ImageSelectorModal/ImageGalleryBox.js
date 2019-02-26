import React from "react";
import { connect } from 'react-redux';

import { selectImage } from '../../../actions/imageGalleryActions';

class ImageGalleryBox extends React.Component {

  render() {
    const referralPrefix = '?utm_source=food_examiner&utm_medium=referral';
    return (
      <div className="image-gallery__item" onClick={this._respond}>
        <img className="image-gallery__image" src={this.props.image.urls.small}  />
        <div className="image-gallery__author-text">
          <a className="text-white" href={this.props.image.authorUrl + referralPrefix} target="_blank">{this.props.image.authorName}</a>
        </div>
      </div>
    );
  }

  _respond = (e) => {
    this.props.selectImage(this.props.image.urls.regular, this.props.image.authorUrl, this.props.image.authorName);
  }
}

export default connect(null, { selectImage })(ImageGalleryBox);
