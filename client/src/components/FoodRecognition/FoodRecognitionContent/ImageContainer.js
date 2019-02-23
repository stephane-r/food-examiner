import React from 'react'

export default function ImageContainer({ imageSrc }) {
  return (
    <div className="bg-success text-center food-recognition-content__image-container">
      {renderImage(imageSrc)}
    </div>
  )
}

function renderImage(imageSrc) {
    if (imageSrc) {
      return (
        <img
          className="img-fluid"
          style={{ maxHeight: '100%', width: 'auto' }}
          src={imageSrc}
          alt="image-placeholder"
        />
      );
    }
    return <div className="bg-primary food-recognition-content__image" />;
  }