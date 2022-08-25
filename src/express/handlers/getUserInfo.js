const operations = require('../../mongoose/operations');


async function getUserInfo(req, res) {

    const user = await operations.getUserInfo(req.userId);
    res.json(user);
    
}


module.exports = getUserInfo;