import React, { Component } from "react";
import Spinner from "react-spinkit";
import { connect } from "react-redux";

import ImageSelectorModal from '../ImageSelectorModal/ImageSelectorModal'

import {
  updateImageLinkInput,
  submitFoodRecognitionForm,
  foodRecognitionGetRandomImage
} from "../../../actions";

class SubmissionForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
  }

  render() {
    return (
      <form
        className="d-flex justify-content-between flex-wrap"
        onSubmit={this._submitForm}
      >
        {this._renderImageLinkInputField()}
        {this._renderSetRandomImageButton()}
        {this._renderSelectFromGalleryButton()}
        {this._renderSubmitButton()}
        <ImageSelectorModal modal={this.state.modal} toggleModal={this.toggleModal} />
      </form>
    );
  }

  _submitForm = e => {
    e.preventDefault();
    this.props.submitFoodRecognitionForm(this.props.imageLinkInputValue);
  };

  _renderImageLinkInputField = () => {
    const invalidFeedbackStyle = {
      position: "absolute",
      display: this.props.imageLinkFieldError ? "block" : "none"
    };
    const inputClassName = this.props.imageLinkFieldError
      ? "form-control is-invalid"
      : "form-control";
    return (
      <div style={{ flexBasis: "100%", marginBottom: "10px" }}>
        <input
          type="text"
          value={this.props.imageLinkInputValue}
          className={inputClassName}
          style={{ position: "relative" }}
          placeholder="Provide a direct link to a file on the web"
          onChange={e => this.props.updateImageLinkInput(e.target.value)}
        />
        <div className="invalid-feedback" style={invalidFeedbackStyle}>
          {this.props.imageLinkFieldError}
        </div>
      </div>
    );
  };

  _renderSelectFromGalleryButton = () => {
    let buttonClass = "btn btn-primary d-flex justify-content-center";
    return (
      <button
        className={buttonClass}
        type="button"
        onClick={this.toggleModal}
        style={{ flexBasis: "33%" }}
      >
        {"Select from gallery"}
      </button>
    );
  };

  _renderSetRandomImageButton = () => {
    let buttonClass = "btn btn-primary d-flex justify-content-center";
    return (
      <button
        className={buttonClass}
        type="button"
        onClick={this.props.getRandomImage}
        style={{ flexBasis: "33%" }}
      >
        {"Set random Image"}
      </button>
    );
  };

  toggleModal = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  _renderSubmitButton = () => {
    const pending = this.props.predictionsPending;
    const buttonContent = pending ? (
      <Spinner
        name="three-bounce"
        className="spinner-small"
        color="white"
        fadeIn="none"
      />
    ) : (
      "Submit"
    );

    return (
      <button
        disabled={pending}
        className="btn btn-primary d-flex justify-content-center"
        type="submit"
        style={{ flexBasis: "33%" }}
      >
        {buttonContent}
      </button>
    );
  };
}

const mapStateToProps = state => ({
  ...state.foodRecognition,
  ...state.imageLinkFieldError
});

export default connect(
  mapStateToProps,
  {
    updateImageLinkInput,
    submitFoodRecognitionForm,
    getRandomImage: foodRecognitionGetRandomImage
  }
)(SubmissionForm);
