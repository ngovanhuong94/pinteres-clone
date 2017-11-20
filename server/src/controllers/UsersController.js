const {User} = require('../models')
const passport = require('passport')
module.exports = {
  async register (req,res) {
    try {
      const {name, email, password} = req.body
      console.log('name:' , name)
      console.log('email', email)
      console.log('password', password)

      const user = await User.create(req.body)
      res.send(user)
    } catch (err) {
      console.log(err)
      res.status(400).send({
        error: 'This email is already exist'
      })
    }
  },
  login (req,res,next) {
    return passport.authenticate('local-login', (err, username) => {
      if (err) {
        if (err.name == 'IncorrectCredentialsError') {
          return res.status(400).json({
            success: false,
            message: err.message
          })
        }

        return res.status(400).json({
          success: false,
          message: 'Could not process the form'
        })
      }

      return res.json({
        success: true,
        message: 'You have successfully logged in!',
        username
      })
    })(req, res, next)
  }
}
