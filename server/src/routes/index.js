const UsersController = require('../controllers/UsersController')
const AuthenticationControllerPolicies = require('../policies/AuthenticationControllerPolicies')
const WinsController = require('../controllers/WinsController')
const isAuthenticated = require('../policies/isAuthenticated')

module.exports = app => {
  app.get('/', (req,res) => {
    res.send({
      error: "HelloWorld"
    })
  })
  app.post('/register', AuthenticationControllerPolicies.register,UsersController.register)
  app.post('/login', AuthenticationControllerPolicies.login,UsersController.login)
  app.post('/api/wins', isAuthenticated,WinsController.create)
  app.get('/api/yourwins', isAuthenticated, WinsController.yourwins)
  app.get('/api/wins', WinsController.index)
}
