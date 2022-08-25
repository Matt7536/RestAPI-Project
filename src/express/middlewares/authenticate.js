const jsonwebtoken = require('jsonwebtoken');

async function authenticate(req, res, next){
    
    const token = req.headers.token;
    if(!token) return res.status(401).json('NO TOKEN --- אינך מחובר למערכת');

    try {

        const isLoggedIn = jsonwebtoken.verify(token, 'tokey');
        req.userId = isLoggedIn.userID;
        next();

    } catch {

        return res.status(401).json('INVALID TOKEN --- אינך מחובר למערכת')
    }

}



module.exports = authenticate;