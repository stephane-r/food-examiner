import React from "react";

export default function ProvideNewImageButton({ onClick }) {
  return (
    <button
      className="btn btn-primary btn-block"
      onClick={onClick}
    >
      Provide a new image link
    </button>
  );
}
