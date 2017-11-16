const config = require('../config')
const Sequelize = require('sequelize')
const fs = require('fs')
const path = require('path')

const db = {}
const sequelize = new Sequelize(
  config.database.database,
  config.database.username,
  config.database.password,
  config.database.options
)

fs
.readdirSync(__dirname)
.filter(file => file !== 'index.js')
.forEach(file => {
  const model = sequelize.import(path.join(__dirname, file))
  db[model.name] = model
})
db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db
