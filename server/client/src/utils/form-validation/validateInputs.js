// Checks if any input is empty or any error exists
// returns a boolean
// used to disable/enable button
const validateInputs = (inputs, errors) =>
  Object.values(inputs).some(value => value === null || value === "") ||
  Object.values(errors).some(value => value);

export default validateInputs;
