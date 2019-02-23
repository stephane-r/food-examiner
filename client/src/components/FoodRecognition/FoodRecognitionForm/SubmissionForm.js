import React, { Component } from "react";
import Spinner from "react-spinkit";
import { connect } from 'react-redux';

import { updateImageLinkInput, submitFoodRecognitionForm } from '../../../actions';

class SubmissionForm extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form
      className="d-flex justify-content-between"
      onSubmit={this._submitForm}
    >
      {this._renderImageLinkInputField(
        this.props.imageLinkFieldError
      )}
      {this._renderButton(this.props.predictionsPending)}
    </form>
    );
  }

  _submitForm = (e) => {
    e.preventDefault();
    this.props.submitFoodRecognitionForm(this.props.imageLinkInputValue)
  }

  _renderButton = () => {
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
    let buttonClass = "btn btn-primary d-flex justify-content-center";
    if (pending) {
      buttonClass += " disabled";
    }
  
    return (
      <button
        disabled={pending}
        className={buttonClass}
        type="submit"
        style={{ flexBasis: "19%" }}
      >
        {buttonContent}
      </button>
    );
  }

  _renderImageLinkInputField = (error) => {
    const invalidFeedbackStyle = {
      position: "absolute",
      display: error ? "block" : "none"
    };
    const inputClassName = error ? "form-control is-invalid" : "form-control";
    return (
      <div style={{ flexBasis: "80%" }}>
        <input
          type="text"
          value={this.props.imageLinkInputValue}
          className={inputClassName}
          style={{ position: "relative" }}
          placeholder="Provide a direct link to a file on the web"
          onChange={(e) => this.props.updateImageLinkInput(e.target.value)}
        />
        <div className="invalid-feedback" style={invalidFeedbackStyle}>
          {error}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state.foodRecognition
})

export default connect(
  mapStateToProps,
  { updateImageLinkInput, submitFoodRecognitionForm }
)(SubmissionForm)