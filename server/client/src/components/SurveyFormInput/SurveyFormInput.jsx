import React from "react";

const SurveyFormInput = ({ name, label, touched, error, ...props }) => (
  <div style={{ height: "12vh" }}>
    <label htmlFor={name}>{label}</label>
    <input {...props} />
    <span style={{ color: "red" }}>{touched && error}</span>
  </div>
);

export default SurveyFormInput;
