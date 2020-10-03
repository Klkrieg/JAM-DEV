const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
    //////example//////
//   name: {
//     type: String,
//     trim: true,
//     required: "Enter a name for transaction",
//   },
//   value: {
//     type: Number,
//     required: "Enter an amount",
//   },
//   date: {
//     type: Date,
//     default: Date.now,
//   },
    email:{
        type: String,
        trim: true,
        required: true,
    },
    password:{
        type: String,
        required: true
    },
    name: {
        type: String,
        trim: true,
        required: true,
    },
    birthday: {
        type: Date,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    profileType: {
        type: String,

    }

});

const Users = mongoose.model("Users", userSchema);

module.exports = Users;
