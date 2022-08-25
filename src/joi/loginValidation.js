const joi = require('joi');


const userLogScheme = joi.object(

    {
        email:joi.string().required().email().lowercase(),
        password:joi.string().required()
    }

)

function loginValidation(input){
    userLogScheme.validate(input);
}



module.exports = loginValidation;