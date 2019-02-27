import React from "react";
import { connect } from 'react-redux';

import { selectImage } from '../../../actions/imageGalleryActions';
import UnsplashAttributionLink from '../../common/UnsplashAttributionLink';

class ImageGalleryBox extends React.Component {

  render() {
    return (
      <div className="image-gallery__item" onClick={this._respond}>
        <img className="image-gallery__image" src={this.props.image.urls.small}  alt={this.props.image.description} />
        <div className="image-gallery__author-text">
          <UnsplashAttributionLink baseUrl={this.props.image.authorUrl} title={this.props.image.authorName} className="text-white" />
        </div>
      </div>
    );
  }

  _respond = (e) => {
    this.props.selectImage(this.props.image.urls.regular, this.props.image.authorUrl, this.props.image.authorName);
  }
}

export default connect(null, { selectImage })(ImageGalleryBox);
