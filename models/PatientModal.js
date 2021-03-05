var mongoose = require("mongoose");

var PatientSchema = new mongoose.Schema({
	firstName: {type: String, required: true},
	lastName: {type: String, required: true},
	gender: {type: String, required: true},
	phoneNo: {type: String, required: true},
}, {timestamps: true});

// Virtual for user's full name
PatientSchema
	.virtual("fullName")
	.get(function () {
		return this.firstName + " " + this.lastName;
	});

module.exports = mongoose.model("Patient", PatientSchema);