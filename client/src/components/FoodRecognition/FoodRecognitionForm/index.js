import React, { Component } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { connect } from "react-redux";

import ProvideNewImageButton from "./ProvideNewImageButton";
import SubmissionForm from "./SubmissionForm";
import {
  foodRecognitionGoToStage2,
  foodRecognitionGoToStage3
} from "../../../actions";

class FoodRecognitionForm extends Component {
  render() {
    switch (this.props.stage) {
      case 2:
        return (
          <div className="d-flex justify-content-center">
            <ReCAPTCHA
              sitekey="6LfzKZMUAAAAAKFeT5RQEEMgmq5AsOvh2y84S6rq"
              onChange={this.props.goToStage3}
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
}

const mapStateToProps = state => {
  const { stage } = state.foodRecognition;
  return {
    stage
  };
};

const mapActionToProps = {
  goToStage2: foodRecognitionGoToStage2,
  goToStage3: foodRecognitionGoToStage3
};

export default connect(
  mapStateToProps,
  mapActionToProps
)(FoodRecognitionForm);
