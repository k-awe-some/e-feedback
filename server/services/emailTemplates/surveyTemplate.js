// exports a function that takes a survey
// and returns a string that represents html
module.exports = survey => {
  return `
  <html>
    <body>
      <div style="text-align: center">
        <h3>We'd like your input so we can serve you better!</h3>
        <p>Your answer to the following question would mean a lot to us:</p>
        <p>${survey.body}</p>
        <div>
          <a href="http://localhost:3000">Yes</a>
        </div>
        <div>
          <a href="http://localhost:3000">No</a>
        </div>
      </div>
    </body>
  </html>
  `;
};
