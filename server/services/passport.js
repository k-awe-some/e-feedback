const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const keys = require("../config/keys");

const User = mongoose.model("user"); // pulls out User Model Class

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback"
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOne({ googleId: profile.id }).then(existingUser => {
        existingUser
          ? done(null, existingUser) // tells passport to proceed with auth flow
          : new User({ googleId: profile.id }) // creates a User Model Instance
              .save() // saves to MOngoDB
              .then(user => done(null, user));
      });
    }
  )
);
