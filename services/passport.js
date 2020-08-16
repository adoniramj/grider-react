const passport = require('passport')
const mongoose = require('mongoose')
const GoogleStrategy = require('passport-google-oauth20').Strategy

const keys = require('../config/keys')

const User = mongoose.model('users')

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
      proxy: true,
    },
    async (accessToken, refreshToken, profile, done) => {
      // Accessing the database to check or create user
      const existingUser = await User.findOne({ googleId: profile.id })
      if (existingUser) {
        return done(null, existingUser)
      }
      const user = await new User({ googleId: profile.id }).save()
      done(null, user)
    }
  )
)

passport.serializeUser((user, done) => {
  //adds identifying token to cookie
  done(null, user.id)
})

passport.deserializeUser(async (id, done) => {
  const user = await User.findById(id)
  done(null, user)
})
