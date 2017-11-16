const UsersController = require('../controllers/UsersController')
const AuthenticationControllerPolicies = require('../policies/AuthenticationControllerPolicies')
module.exports = app => {
  app.get('/', (req,res) => {
    res.send({
      error: "HelloWorld"
    })
  })
  app.post('/register', AuthenticationControllerPolicies.register,UsersController.register)
}
