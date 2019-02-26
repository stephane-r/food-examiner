import React from "react";

class ImageGalleryBox extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { item } = this.props;
    return (
      <div className="image-gallery__item">
        <img className="image-gallery__image" ref={this.imageRef} src={item}  />
      </div>
    );
  }
}

export default ImageGalleryBox;
