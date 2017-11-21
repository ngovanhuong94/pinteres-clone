const {Win, User} = require('../models')

module.exports = {
  async create (req,res,next) {
    const {title, source} = req.body
    const user = req.user

    console.log('title:', title)
    console.log('source:', source)
    try {
      const newWin = await Win.create({
        title: title,
        source: source
      })
      await newWin.setUser(user)
      await user.addWin(newWin)
      res.send(newWin)
    } catch (err) {
      console.log(err)
      return res.status(400).send({
        error: 'An error occured trying to create win'
      })
    }
  },
  async yourwins (req,res,next) {
    const user = req.user
    try {
      const wins = await Win.findAll({
        include: ['User'],
        where: {
          UserId: user.id
        }
      })
      res.send(wins)
    } catch (err) {
      console.log(err)
      res.status(400).send({
        error: 'An error occured trying to load your wins'
      })
    }
  },
  async index (req,res,next) {
    try {
      const wins = await Win.findAll({
      include: ['User']
       })
      res.send(wins)
    } catch (err) {
      console.log(err)
      res.status(400).send({
        error: 'An error occured trying to load wins'
      })
    }
  }
}
