import React from "react";

const SurveyReview = ({ submittedValues, isSubmitting, toggleReview }) => (
  <div>
    <p>
      REVIEW
      {JSON.stringify(submittedValues, null, 4)}
    </p>

    <button className="waves-effect waves-light btn" onClick={toggleReview}>
      Back
    </button>
    <button
      className="waves-effect waves-light btn"
      type="submit"
      disabled={isSubmitting}
    >
      Submit
    </button>
  </div>
);

export default SurveyReview;
