const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const keys = require('../config/keys');
const { User } = require('../models');
const HttpError = require('../models/http-error');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  let user = null;
  try {
    user = await User.findById(id);
  } catch (err) {
    const error = new HttpError('Fetching user failed!', 500);
    return done(error, false);
  }
  done(null, user);
});

passport.use(
  new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/api/user/auth/google/callback',
    proxy: true
  }, async (accessToken, refreshToken, profile, done) => {
    let existingUser = null;
    try {
      existingUser = await User.findOne({ googleId: profile.id });
    } catch (err) {
      const error = new HttpError('Signing up failed!', 500);
      return done(error, false);
    }

    if (existingUser) {
      return done(null, existingUser);
    }

    const createdUser = new User({
      googleId: profile.id,
      username: profile.displayName,
      fullname: profile.name.givenName + ' ' + profile.name.familyName,
      email: profile.emails[0].value,
    });

    try {
      await createdUser.save();
    } catch (err) {
      const error = new HttpError('Signing up failed!', 500);
      return done(error, false);
    }

    done(null, createdUser);
  })
);