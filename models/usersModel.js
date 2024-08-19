const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;


const usersSchema = new Schema({
    "name": String,
    "age": Number,
    "phone":Number,
    "active": Boolean,
});

const usersModel = mongoose.model("users",usersSchema);

module.exports = usersModel;

