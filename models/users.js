const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
	email: {
		type: String,
		trim: true,
		required: true,
	},
	password: {
		type: String,
		required: true,
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
	zipcode: {
		type: String,
		trim: true,
		required: false,
	},
	birthday: {
		type: Date,
		required: false,
	},
	phoneNumber: {
		type: String,
		required: false,
	},
	profileType: {
		type: String,
		required: false,
	},
});

const Users = mongoose.models.Users || mongoose.model("Users", userSchema);

module.exports = Users;
