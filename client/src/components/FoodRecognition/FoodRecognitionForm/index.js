import React from "react";
import Spinner from 'react-spinkit';

export default function FoodRecognitionForm(props) {
  return (
    <form
      className="d-flex justify-content-between"
      onSubmit={props.onFormSubmit}
    >
      {renderInputField(props.value, props.onInputFieldUpdated)}
      {renderButton(props.predictionsPending)}
    </form>
  );
}

function renderButton(pending = false) {

  const buttonContent = pending ? <Spinner name="three-bounce" color='white' className='spinner-small' fadeIn='none' /> : 'Submit';
  let buttonClass = 'btn btn-primary d-flex justify-content-center';
  if (pending) {
    buttonClass += ' disabled';
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

function renderInputField(value, onChange) {
  return (
    <input
      type="text"
      style={{ flexBasis: "80%" }}
      value={value}
      className="form-control"
      placeholder="Provide a direct link to a file on the web"
      onChange={onChange}
    />
  );
}
