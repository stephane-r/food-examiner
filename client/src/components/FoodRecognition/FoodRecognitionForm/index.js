import React from "react";
import Spinner from "react-spinkit";
import ReCAPTCHA from "react-google-recaptcha";

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
        <form
          className="d-flex justify-content-between"
          onSubmit={props.onFormSubmit}
        >
          {renderInputField(props.value, props.onInputFieldUpdated, props.imageLinkFieldError)}
          {renderButton(props.predictionsPending)}
        </form>
      );
    default:
      return (
        <button
          className="btn btn-primary btn-block"
          onClick={props.onSupplyNewImageButtonClicked}
        >
          Supply new image
        </button>
      );
  }
}

function renderButton(pending = false) {
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

function renderInputField(value, onChange, error = '') {

  const invalidFeedbackStyle = {
    position: 'absolute',
    display: error ? 'block' : 'none'
  };
  const inputClassName = error ? 'form-control is-invalid' : 'form-control';

  return (
    <div style={{ flexBasis: "80%" }}>
      <input
        type="text"
        value={value}
        className={inputClassName}
        style={{ position: 'relative' }}
        placeholder="Provide a direct link to a file on the web"
        onChange={onChange}
      />
      <div class="invalid-feedback" style={invalidFeedbackStyle}>{error}</div>
    </div>
  );
}
