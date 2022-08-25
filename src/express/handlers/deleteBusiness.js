const operations = require('../../mongoose/operations');


async function deleteBusiness(req, res){

    const userId = req.userId;
    const businessId = req.query.businessId;

    if(!businessId) return res.status(400).json('אנא הכנס מזהה עסק למחיקה');

    const business = await operations.deleteBusiness(userId, businessId);
    res.json(`${business} was deleted`);

}




module.exports = deleteBusiness;