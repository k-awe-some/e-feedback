// exports a function that takes a survey
// and returns a string that represents html
module.exports = survey => {
  return `<div>${survey.body}</div>`;
};
