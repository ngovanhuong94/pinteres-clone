const {User} = require('../models')

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
  }
}
