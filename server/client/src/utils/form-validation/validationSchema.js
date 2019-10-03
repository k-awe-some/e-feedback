import * as Yup from "yup";
import { trimEmails, validateEmails } from "./validateEmails";

const validationSchema = Yup.object().shape({
  surveyTitle: Yup.string()
    .max(78, "Your Survey Title must be under 78 characters.")
    .required("Your Survey must have a Title."),
  subjectLine: Yup.string()
    .max(78, "Your Email's Subject Line must be under 78 characters.")
    .required("Your Email must have a Subject Line."),
  emailBody: Yup.string()
    .max(3000, "Your Email Body must be under 3000 characters.")
    .required("Your Email must have a Body."),
  recipientList: Yup.string()
    .transform(emails => trimEmails(emails))
    .required("Your Survey must have a Recipient List.")
    .test("emails", "Invalid email address", emails => validateEmails(emails))
});

export default validationSchema;
