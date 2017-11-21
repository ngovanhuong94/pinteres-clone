const {User} = require('../models')
const passport = require('passport')
const jwt = require('jsonwebtoken')
const config = require('../config/index')

function jwtSignUser (user) {
 const ONE_WEEK = 60*60*24*7
 return jwt.sign(user, config.authentication.jwtSecret, {
   expiresIn: ONE_WEEK
 })
}
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
  async login (req,res,next) {
    try {
      const {email, password} = req.body
      const user = await User.findOne({
        where: {
          email: email
        }
      })
      if(!user) {
        return res.status(400).send({
          error: 'The login information was incorrect'
        })
      }
      const isValidPassword = await user.comparePassword(password)
      if(!isValidPassword) {
        return res.status(400).send({
          error: 'The login information was incorrect'
        })
      }
      const userJson = user.toJSON()
      return res.send({
        user: userJson,
        token: jwtSignUser(userJson)
      })
    } catch (err) {
      console.log(err)
      res.status(400).send({
        error: 'Sorry !. An error occured trying to login'
      })
    }
  }
}
