var mongoose = require("mongoose");

var CaseSchema = new mongoose.Schema(
	{
		patientId: { type: String, required: true },
		diagnosis: { type: String, required: true },
		doctorId: { type: String, required: true },
	},
	{ timestamps: true }
);

module.exports = mongoose.model("Cases", CaseSchema);
