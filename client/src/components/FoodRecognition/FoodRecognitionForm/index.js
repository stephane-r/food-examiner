import React from "react";

export default function FoodRecognitionForm(props) {
  return (
    <form
      className="d-flex justify-content-between"
      onSubmit={props.onFormSubmit}
    >
      {renderInputField(props.value, props.onInputFieldUpdated)}
      {renderButton()}
    </form>
  );
}

function renderButton() {
  return (
    <button
      className="btn btn-secondary"
      type="submit"
      style={{ flexBasis: "19%" }}
    >
      Submit
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
