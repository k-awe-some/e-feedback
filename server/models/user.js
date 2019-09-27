const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  googleId: String
});

// Creates a new collection called 'users' in mongoDB collections //
mongoose.model("user", userSchema);
