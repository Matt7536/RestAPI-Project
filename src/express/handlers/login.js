const operations = require('../../mongoose/operations');
const jsonwebtoken = require('jsonwebtoken');
const loginValidation = require('../../joi/loginValidation');


async function login(req, res) {

    const {error} = loginValidation(req.body);
    if(error) return res.status(400).json(error.details);

    const {email, password} = req.body;
    const doesExist = await operations.login(email, password);
    if(!doesExist) return res.status(500).json('משתמש לא קיים');

    // יצירת הטוקן - התחברות
    const token = jsonwebtoken.sign({userID:doesExist._id}, 'tokey');
    return res.json(token);

}




module.exports = login;