import React, { useState } from "react";
import { Formik, Form } from "formik";

import { trimEmails } from "../../utils/form-validation/validateEmails";
import validationSchema from "../../utils/form-validation/validationSchema";
import validateInputs from "../../utils/form-validation/validateInputs";
import FIELDS from "./FIELDS";
import SurveyFormInput from "../SurveyFormInput/SurveyFormInput";
import SurveyReview from "../SurveyReview/SurveyReview";

const SurveyForm = () => {
  const [submittedValues, setSubmittedValues] = useState(null);
  const [showSurveyReview, setShowSurveyReview] = useState(false);

  const toggleReview = () => setShowSurveyReview(!showSurveyReview);

  return (
    <React.Fragment>
      <Formik
        initialValues={{
          surveyTitle: "",
          subjectLine: "",
          emailBody: "",
          recipientList: ""
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          // back-end code goes here
          setSubmitting(true);

          setTimeout(() => {
            console.log(submittedValues);
          }, 500);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          isSubmitting
        }) => (
          <Form>
            {showSurveyReview === false ? (
              <React.Fragment>
                {FIELDS.map(({ name, id, label }) => (
                  <SurveyFormInput
                    key={id}
                    type="text"
                    name={name}
                    id={id}
                    label={label}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                    touched={touched[id]}
                    error={errors[id]}
                  />
                ))}
                <a href="/surveys" className="waves-effect waves-light btn">
                  Cancel
                </a>
                <button
                  type="button"
                  className="waves-effect waves-light btn"
                  onClick={() => {
                    setSubmittedValues({
                      ...values,
                      recipientList: trimEmails(values.recipientList)
                    });
                    toggleReview();
                  }}
                  disabled={validateInputs(values, errors)}
                >
                  Next
                </button>
              </React.Fragment>
            ) : (
              <SurveyReview
                submittedValues={submittedValues}
                isSubmitting={isSubmitting}
                toggleReview={toggleReview}
              />
            )}
          </Form>
        )}
      </Formik>
    </React.Fragment>
  );
};

export default SurveyForm;
