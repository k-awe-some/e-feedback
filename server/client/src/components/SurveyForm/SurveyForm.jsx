import React from "react";
import { Formik, Form } from "formik";

import { trimEmails } from "../../utils/form-validation/validateEmails";
import validationSchema from "../../utils/form-validation/validationSchema";
import SurveyFormInput from "../SurveyFormInput/SurveyFormInput";

const FIELDS = [
  { name: "surveyTitle", id: "surveyTitle", label: "Survey Title" },
  { name: "subjectLine", id: "subjectLine", label: "Subject Line" },
  { name: "emailBody", id: "emailBody", label: "Email Body" },
  { name: "recipientList", id: "recipientList", label: "Recipients" }
];

const SurveyForm = () => (
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
        values = { ...values, recipientList: trimEmails(values.recipientList) };
        console.log(values);
        resetForm();
      }, 500);
    }}
  >
    {({ values, errors, touched, handleChange, handleBlur, isSubmitting }) => (
      <Form>
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
          className="waves-effect waves-light btn"
          type="submit"
          disabled={isSubmitting}
        >
          Next
        </button>
      </Form>
    )}
  </Formik>
);

export default SurveyForm;
