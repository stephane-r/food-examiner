import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader } from "reactstrap";

import ImageSelector from './ImageSelector';
import { imageGalleryToggleModal } from "../../../actions/imageGalleryActions";

class ImageSelectorModal extends Component {

  render() {
    return (
        <Modal
        size={'lg'}
        isOpen={this.props.modalIsOpen}
        toggle={this.props.toggleModal}
        className={this.props.className}
        backdrop
      >
        <ModalHeader toggle={this.props.toggleModal}>Select Image</ModalHeader>
        <ImageSelector />
        <div className="d-flex justify-content-between align-items-center" style={{ margin: '10px' }}>
            <span>Images from <a href="https://unsplash.com/?utm_source=food_examiner&utm_medium=referral" target="_blank">Unsplash</a></span>
            <button className="btn btn-secondary" style={{ marginRight: '10px' }} onClick={this.props.toggleModal}>Go Back</button>
        </div>
      </Modal>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    modalIsOpen: state.imageGallery.modalIsOpen
  };
}

export default connect(mapStateToProps, { toggleModal: imageGalleryToggleModal })(ImageSelectorModal);
