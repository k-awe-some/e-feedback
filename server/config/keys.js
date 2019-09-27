// Determine environment //
if (process.env.NODE_ENV === "production") {
  module.exports = require("./prod"); // returns prod keys
} else {
  module.exports = require("./dev"); // returns dev keys
}
