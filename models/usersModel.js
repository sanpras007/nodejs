const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;


const usersSchema = new Schema({
    "name": String,
    "phone":Number,
    "emial": String,
    "password":String,
});

const usersModel = mongoose.model("users",usersSchema);

module.exports = usersModel;

