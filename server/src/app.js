const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const {sequelize} = require('./models')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(session({
  secret: 'this is my secret'
}))

require('./routes')(app)
sequelize.sync()
.then(() => {
  app.listen(8081, () => console.log('Server is running'))
})
.catch(err => console.log(err))
