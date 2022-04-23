import React from "react";

function BStest() {
  return (
    <div className="container text-center">
      <h1 className="border text-danger">BS5 Test <i className="bi bi-apple" /> (red apple show..)</h1>
      <div
        className="alert alert-warning alert-dismissible fade show"
        role="alert"
      >
        <strong>Try close this</strong>to test if BS5 JS bundle working...
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
    </div>
  );
}

export default BStest;
