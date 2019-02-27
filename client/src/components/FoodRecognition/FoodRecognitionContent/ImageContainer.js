import React from "react";

export default function ImageContainer({ imageSrc, imageDescription, imageAuthorName, imageAuthorUrl }) {
  return (
    <div
      className="bg-light text-center food-recognition-content__image-container d-flex justify-content-between flex-column"
    >
      {renderImage(imageSrc, imageDescription)}
      {renderImageAuthor(imageAuthorName, imageAuthorUrl)}
    </div>
  );
}

function renderImage(imageSrc,imageDescription) {
  if (imageSrc) {
    return (
      <img
        className="img-fluid"
        style={{ maxHeight: "95%", width: "auto", marginBottom: "20px" }}
        src={imageSrc}
        alt={imageDescription}
      />
    );
  }
  return <div className="bg-light food-recognition-content__image" />;
}

function renderImageAuthor(imageAuthorName, imageAuthorUrl) {
  const referralPrefix = '?utm_source=food_examiner&utm_medium=referral';
  return (
    <div className="text-primary" style={{ minHeight: '5%' }}> 
      <span>Photo by </span>
      <a href={imageAuthorUrl + referralPrefix} target="_blank" rel="noopener noreferrer">{imageAuthorName}</a>
      <span> / </span>
      <a href="https://unsplash.com/?utm_source=food_examiner&utm_medium=referral" target="_blank" rel="noopener noreferrer">Unsplash</a>
    </div>
  )
}