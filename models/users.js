const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({

    email:{
        type: String,
        trim: true,
        required: true,
    },
    password:{
        type: String,
        required: true
    },
    firstName: {
        type: String,
        trim: true,
        required: true,
    },
    lastName: {
        type: String,
        trim: true,
        required: false,
    },
    birthday: {
        type: Date,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    profileType: {
        type: String,
        required: true,
    }

});

const Users = mongoose.model("Users", userSchema);

module.exports = Users;
