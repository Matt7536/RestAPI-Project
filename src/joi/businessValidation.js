const joi = require('joi');


const businessScheme = joi.object(
    {
        Name: joi.string().required().min(5).max(255),
        Description: joi.string().required().min(15).max(255)  ,
        Address: joi.string().required().min(20).max(255)  ,
        Phone: joi.string().required().min(9).max(20)  ,
        Image: joi.string().required().min(20).max(500)
    }
);

function businessValidation(input) {
    return businessScheme.validate(input);
}


module.exports = businessValidation;