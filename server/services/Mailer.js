const sgMail = require("@sendgrid/mail");
const keys = require("../config/keys");

class Mailer {
  // {subject, recipients} = survey: as 1st argument
  // content: entire 2nd argument (surveyTemplate(survey) string in surveyRoutes)
  constructor({ subject, recipients }, content) {
    sgMail.setApiKey(keys.sendgridKey);

    this.msg = {
      to: recipients.map(({ email }) => email),
      from: "no-reply@efeedback.com",
      subject: subject,
      html: content,
      trackingSettings: { enable_text: true, enabled: true }
    };
  }

  async send() {
    const response = await sgMail.send(this.msg);
    return response;
  }
}

module.exports = Mailer;
