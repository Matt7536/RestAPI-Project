const models = require('./models');
const bcryptjs = require('bcryptjs');





//----------------------- USER OPERATIONS ---------------------------//




// REGISTER
async function register(input){

    try {

        input.password = bcryptjs.hashSync(input.password);
        return await new models.userModel(input).save();

    } catch {

        return null;
    }

}




// LOGIN
async function login(email, password){

    try {

        const user = await models.userModel.findOne({email:email});
        if (user == null) return null;

        const verify = bcryptjs.compareSync(password, user.password);
        if (verify) return user; else return null;

    } catch {

        return null;
    }

}




// GET USER INFO
async function getUserInfo(userId){

    try {

        const user = await models.userModel.findById(userId);
        return user;

    } catch {

        return null;
    }

}






//--------------------- BUSINESSES OPERATIONS -------------------------//




// GET ALL BUSINESS CARDS
function getAllBusinesses(userId){

    try {

        const businesses = await models.businessModel.find(userId);
        return businesses;

    } catch {

        return null;
    }
    
}




// GET BUSINESS CARD
function getBusiness(userId, businessId){

    try {

        const business = await models.businessModel.findOne({userId:userId, _id:businessId});
        return business;

    } catch {

        return null;
    }

}




// CREATE BUSINESS CARD
function createBusiness(input){

    try {

        const business = await new models.businessModel(input).save();
        return business;

    } catch {

        return null;
    }

}




// DELETE BUSINESS CARD
function deleteBusiness(userId, businessId){

    try {

        const business = await models.businessModel.findOne({userId:userId, _id:businessId});
        await models.businessModel.findByIdAndDelete(userId);
        return business;

    } catch {

        return null;
    }
}




// EDIT BUSINESS CARD
function editBusiness(query, input){

    try {

        const user = await models.userModel.findByIdAndUpdate(query, input);
        return user;

    } catch {

        return null;
    }

}





module.exports = {register, login, getUserInfo, createBusiness, deleteBusiness, editBusiness, getBusiness, getAllBusinesses};
