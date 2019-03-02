import React from "react";

export default function ProvideNewImageButton({ onClick }) {
  return (
    <div style={{ textAlign: 'center' }}>
      <button
        className="btn btn-primary"
        onClick={onClick}
      >
        Provide a new image link
      </button>
    </div>
  );
}
