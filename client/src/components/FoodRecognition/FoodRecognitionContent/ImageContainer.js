import React from "react";
import Spinner from "react-spinkit";
import Img from 'react-image';

import UnsplashAttributionLink from '../../common/UnsplashAttributionLink';

export default function ImageContainer({ imageSrc, imageDescription, imageAuthorName, imageAuthorUrl }) {
  return (
    <div
      className="text-center food-recognition-content__image-container d-flex justify-content-between flex-column"
    >
      {renderImage(imageSrc, imageDescription)}
      {renderImageAuthor(imageAuthorName, imageAuthorUrl)}
    </div>
  );
}

function renderImageLoadingSpinner() {
  return (
    <div style={{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Spinner name="ball-scale-multiple" fadeIn={'none'} />
    </div>
  )
}

function renderImage(imageSrc,imageDescription) {
  if (imageSrc) {
    return (
      <Img
        className="img-fluid"
        style={{ maxHeight: "95%", width: "auto", marginBottom: "20px" }}
        src={imageSrc}
        alt={imageDescription}
        loader={renderImageLoadingSpinner()}
      />
    );
  }
  return <div className="bg-light food-recognition-content__image" />;
}

function renderImageAuthor(imageAuthorName, imageAuthorUrl) {
  return (
    <div className="text-primary" style={{ minHeight: '5%' }}> 
      <span>Photo by </span>
      <UnsplashAttributionLink baseUrl={imageAuthorUrl} title={imageAuthorName} />
      <span> / </span>
      <UnsplashAttributionLink />
    </div>
  )
}