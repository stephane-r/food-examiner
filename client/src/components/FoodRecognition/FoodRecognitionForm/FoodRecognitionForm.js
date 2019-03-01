import React, { Component } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { connect } from "react-redux";

import ProvideNewImageButton from "./ProvideNewImageButton";
import SubmissionForm from "./SubmissionForm";
import {
  foodRecognitionGoToStage2,
  foodRecognitionGoToStage3,
  updateGoogleRecaptchaValue
} from "../../../actions/foodRecognitionFormActions";

class FoodRecognitionForm extends Component {
  render() {
    switch (this.props.stage) {
      case 2:
        return (
          <div className="d-flex justify-content-center">
            <ReCAPTCHA
              sitekey="6LfzKZMUAAAAAKFeT5RQEEMgmq5AsOvh2y84S6rq"
              onChange={(value) => this.onGoogleRecaptchaTicked(value)}
            />
          </div>
        );
      case 3:
        return (
          <SubmissionForm
            imageLinkFieldError={this.props.imageLinkFieldError}
          />
        );
      default:
        return <ProvideNewImageButton onClick={this.props.goToStage2} />;
    }
  }

  onGoogleRecaptchaTicked = (value) => {
    this.props.updateGoogleRecaptchaValue(value);
    this.props.goToStage3();
  }
}

const mapStateToProps = state => {
  const { stage } = state.foodRecognition;
  return {
    stage
  };
};

const mapActionToProps = {
  goToStage2: foodRecognitionGoToStage2,
  goToStage3: foodRecognitionGoToStage3,
  updateGoogleRecaptchaValue
};

export default connect(
  mapStateToProps,
  mapActionToProps
)(FoodRecognitionForm);
