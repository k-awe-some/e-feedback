const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  googleId: String,
  displayName: String,
  credits: { type: Number, default: 0 }
});

// Creates a new collection called 'users' in mongoDB collections //
mongoose.model("user", userSchema);
