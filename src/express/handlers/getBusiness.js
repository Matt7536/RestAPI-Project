const operations = require('../../mongoose/operations');



async function getBusiness(req, res) {

    const userId = req.userId;
    const cardId = req.query.cardId;

    if(!cardId) return res.status(400).json('לא סופק מזהה עסק');

    const business = await operations.getBusiness(userId, cardId);
    if(business == null) res.status(500).json('לא נמצאו עסקים תחת מזהה משתמש זה')
    res.json(business);

}




module.exports = getBusiness;