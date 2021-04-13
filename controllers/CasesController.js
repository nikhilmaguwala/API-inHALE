const CaseModel = require("../models/CaseModel");
const { body,validationResult } = require("express-validator");
const { sanitizeBody } = require("express-validator");
//helper file to prepare responses.
const apiResponse = require("../helpers/apiResponse");
/**
 * Patient registration.
 *
 *
 * @returns {Object}
 * @param req
 * @param res
 */
exports.addCase = [
	// Validate fields.

	body("diagnosis").isLength({ min: 1 }).trim().withMessage("Diagnosis must be specified."),
	// Sanitize fields.
	sanitizeBody("diagnosis").escape(),
	// Process request after validation and sanitization.
	(req, res) => {
		try {
			// Extract the validation errors from a request.
			const errors = validationResult(req);
			if (!errors.isEmpty()) {
				// Display sanitized values/errors messages.
				return apiResponse.validationErrorWithData(res, "Validation Error.", errors.array());
			}else {
				// Create User object with escaped and trimmed data
				var newCase = new CaseModel(
					{
						patientId: req.body.patientId,
						diagnosis: req.body.diagnosis,
						doctorId: req.body.doctorId,
					}
				);
					// Save user.
				newCase.save(function (err) {
					if (err) { return apiResponse.ErrorResponse(res, err); }
					let caseData = {
						_id: newCase._id,
						patientId: newCase.patientId,
						diagnosis: newCase.diagnosis,
						doctorId: newCase.doctorId,
						date: newCase.createdAt,
					};
					return apiResponse.successResponseWithData(res,"Adding New Case Success.", caseData);
				});
			}
		} catch (err) {
			//throw error in json response with status 500.
			return apiResponse.ErrorResponse(res, err);
		}
	}];

exports.getCase = [
	function (req, res) {
		try {
			CaseModel.find({ patientId: req.query.patientId, doctorId: req.query.doctorId }).limit(5).sort({createdAt: "desc"}).then((patients)=>{
				if(patients.length > 0){
					return apiResponse.successResponseWithData(res, "Operation success", patients);
				}else{
					return apiResponse.successResponseWithData(res, "Operation success", []);
				}
			});
		} catch (err) {
			//throw error in json response with status 500.
			return apiResponse.ErrorResponse(res, err);
		}
	}
];


