export const trimEmails = emails =>
  emails
    .split(",")
    .map(email => email.trim())
    .join(",");

export const validateEmails = emails => {
  const isEmail = value => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  return emails && emails.split(",").every(isEmail);
};
