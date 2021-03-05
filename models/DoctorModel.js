var mongoose = require("mongoose");

var DoctorSchema = new mongoose.Schema({
	firstName: {type: String, required: true},
	lastName: {type: String, required: true},
	email: {type: String, required: true},
	password: {type: String, required: true},
	gender: {type: String, required: true},
	phoneNo: {type: String, required: true},
	clinicName: {type: String, required: true},
}, {timestamps: true});

// Virtual for user's full name
DoctorSchema
	.virtual("fullName")
	.get(function () {
		return this.firstName + " " + this.lastName;
	});

module.exports = mongoose.model("Doctor", DoctorSchema);