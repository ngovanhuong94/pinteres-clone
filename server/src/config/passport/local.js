const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const {User} = require('../../models')

module.exports = new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  session: false,
  passReqToCallback: true
},async (req, email, password, done) => {
  const userData = {
    email: email.trim(),
    password: password.trim()
  }
  console.log('you are here')
  const user = await User.findOne({
    where: {
      email: email
    }
  })
  if (!user) {
    const error = new Error('Incorrect email or password')
    error.name = 'IncorrectCredentialsError'
    return done(error)
  }
  const isMatch = user.comparePassword(password)
  if(!isMatch) {
    const error = new Error('Incorrect email or password')
    error.name = 'IncorrectCredentialsError'
    return done(error)
  }
  return done(null, user.name)
  // return User.findOne({email: userData.email}).then(user => {
  //   if (!user) {
  //     const error = new Error('Incorrect email or password')
  //     error.name = 'IncorrectCredentialsError'
  //     return done(error)
  //   }
  //   const isMatch = user.password == password
  //   if(!isMatch) {
  //     const error = new Error('Incorrect email or password')
  //     error.name = 'IncorrectCredentialsError'
  //     return done(error)
  //   }
  //   return done(null, user.name)
  // })
})
