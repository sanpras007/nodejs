const usersModel = require('../models/usersModel');

const readSpecificUser = async (req,res) =>{
    const data = req.query;
    try{
        const data = await usersModel.find({"_id":req.query.id});
        (data.length > 0)
        ?
            res.status(200).json({"data":data,"msg":"","err":""})
        :
            res.status(400).json({"data":"","msg":"no user found","err":""});
    }catch(err){
        res.status(500).json({"data":"","messgae":"","err":err.messgae}); 
    }
}

const readuser = async (req,res) =>{
    try{
        let data = await usersModel.find();
            (data.length < 0)
            ?
                res.status(500).json({"data":"","msg":"no data","err":""})
            :
                res.status(200).json({"data":data,"msg":"","err":""});
        }catch(err){
            res.status(500).json({"data":"","messgae":"","err":err.messgae});
        }
}

const createUser = async (req,res) =>{
    try{
        let data = req.body;
        const users = new usersModel(data);
        await users.save();
        res.status(200).json({"data":"","messgae":"added success","err":""});
        // res.status(400).json({"data":"","msg":"alreay exist","err":""});
    }catch(err){
        res.status(500).json({"data":"","messgae":"","err": "unable to create user data"});
    }
}

const deleteDetails = async (req,res)=>{
    try{
        const data = await usersModel.deleteOne({"_id":req.params.id});
        (data.deletedCount > 0)
        ?
        res.status(200).json({"data":"","msg":"delete success","err":""})
        :
        res.status(400).json({"data":"","msg":"","err":"delete failed"});
    }
    catch(err){
        res.status(500).json({"data":"","msg":"","err":"unable to delete"});
    }
}

const update = async (req,res) =>{
    try{
        const data = req.body;
        let user = await usersModel.updateOne({"_id":data.id},{$set:data});
        console.log(user);
        (user.modifiedCount > 0)
        ?
        res.status(200).json({"data":"","messgae":"update success","err":""})
        :
        res.status(500).json({"data":"","messgae":"no trainee found","err":""});
    }catch(err){
        res.status(500).json({"data":"","messgae":"","err":"unable to find trainee"}); 
    }
}

module.exports = {
    createUser,
    readSpecificUser,
    readuser,
    deleteDetails,
    update,
}