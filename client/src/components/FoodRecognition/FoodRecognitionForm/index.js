import React from "react";
import ReCAPTCHA from "react-google-recaptcha";

import ProvideNewImageButton from './ProvideNewImageButton';
import SubmissionForm from './SubmissionForm';

export default function FoodRecognitionForm(props) {
  const { stage = 1 } = props;
  switch (stage) {
    case 2:
      return (
        <div className="d-flex justify-content-center">
          <ReCAPTCHA
            sitekey="6LfzKZMUAAAAAKFeT5RQEEMgmq5AsOvh2y84S6rq"
            onChange={props.onReCaptchaCompleted}
          />
        </div>
      );
    case 3:
      return (
        <SubmissionForm onFormSubmit={props.onFormSubmit} value={props.value} onInputFieldUpdated={props.onInputFieldUpdated} imageLinkFieldError={props.imageLinkFieldError} />
      );
    default:
      return <ProvideNewImageButton onClick={props.onProvideNewImageButtonClicked} />;
  }
}

