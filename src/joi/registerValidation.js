const joi = require('joi');


const userRegScheme = joi.object(
    
    {
        name:joi.string().required(),
        email:joi.string().required().email().lowercase(),
        password:joi.string().required().min(6),
        isBusinessAccount:joi.boolean().required()
    }

)

function registerValidation(input){
    return userRegScheme.validate(input);
}




module.exports = registerValidation;