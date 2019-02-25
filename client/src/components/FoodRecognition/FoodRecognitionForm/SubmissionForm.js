import React, { Component } from "react";
import Spinner from "react-spinkit";
import { connect } from "react-redux";

import {
  updateImageLinkInput,
  submitFoodRecognitionForm,
  foodRecognitionGetRandomImage
} from "../../../actions";

class SubmissionForm extends Component {

  render() {
    return (
      <form
        className="d-flex justify-content-between flex-wrap"
        onSubmit={this._submitForm}
      >
        {this._renderImageLinkInputField()}
        {this._renderSetRandomImageButton()}
        {this._renderSubmitButton()}
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
    const inputClassName = this.props.imageLinkFieldError ? "form-control is-invalid" : "form-control";
    return (
      <div style={{ flexBasis: "100%", marginBottom: '10px' }}>
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

  _renderSetRandomImageButton = () => {
    let buttonClass = "btn btn-primary d-flex justify-content-center";
    return (
      <button
        className={buttonClass}
        type="button"
        onClick={this.props.getRandomImage}
        style={{ flexBasis: '49%' }}
      >
        {"Set random Image"}
      </button>
    );
  };

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
        style={{ flexBasis: '49%' }}
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
  { updateImageLinkInput, submitFoodRecognitionForm, getRandomImage: foodRecognitionGetRandomImage }
)(SubmissionForm);
