const operations = require('../../mongoose/operations');



async function getAllBusinesses(req, res){

    const businesses = await operations.getAllBusinesses(req.userId);
    res.json(businesses);

}




module.exports = getAllBusinesses;