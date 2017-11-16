const Joi = require('joi')


module.exports = {
  register (req,res,next) {
    const schema = {
      email: Joi.string().email(),
      name: Joi.string().regex(new RegExp('^[a-zA-Z0-9]{3,128}$')),
      password: Joi.string().regex(new RegExp('^[a-zA-Z0-9]{8,32}$'))
    }

    const {error} = Joi.validate(req.body, schema)

    if(error) {
      switch (error.details[0].context.key) {
        case 'email':
         res.status(404).send({
           error: 'You must provide a valid email address'
         })
        case 'name':
         res.status(400).send({
           error:  `The password provided failed to match the following rules:
               <br>
               1. It must contain ONLY the following characters: lower case, upper case, numerics.
               <br>
               2. It must be at least 3 characters in length and not greater than 128 characters in length.
             `
         })
         case 'password':
          res.status(400).send({
            error:  `The password provided failed to match the following rules:
               <br>
               1. It must contain ONLY the following characters: lower case, upper case, numerics.
               <br>
               2. It must be at least 8 characters in length and not greater than 32 characters in length.
             `
          })
      }
    } else {
      next()
    }
  }
}
