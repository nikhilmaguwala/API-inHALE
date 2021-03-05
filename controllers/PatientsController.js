const PatientModel = require("../models/PatientModal");
const { body,validationResult } = require("express-validator");
const { sanitizeBody } = require("express-validator");
const auth = require("../middlewares/jwt");
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
exports.addPatients = [
	// Validate fields.
	body("firstName").isLength({ min: 1 }).trim().withMessage("First name must be specified.")
		.isAlphanumeric().withMessage("First name has non-alphanumeric characters."),
	body("lastName").isLength({ min: 1 }).trim().withMessage("Last name must be specified.")
		.isAlphanumeric().withMessage("Last name has non-alphanumeric characters."),
	body("gender").isLength({ min: 1 }).trim().withMessage("Gender must be specified."),
	body("phoneNo").isLength({ min: 10, max: 10 }).trim()
		.withMessage("Phone No. must be of 10 characters").custom((value) => {
			return PatientModel.findOne({phoneNo : value}).then((user) => {
				console.log(user);
				if (user) {
					return Promise.reject("Phone No. already in use");
				}
			});
		}),
	// Sanitize fields.
	sanitizeBody("firstName").escape(),
	sanitizeBody("lastName").escape(),
	sanitizeBody("gender").escape(),
	sanitizeBody("phoneNo").escape(),
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
				var user = new PatientModel(
					{
						firstName: req.body.firstName,
						lastName: req.body.lastName,
						gender: req.body.gender,
						phoneNo: req.body.phoneNo,
					}
				);
					// Save user.
				user.save(function (err) {
					if (err) { return apiResponse.ErrorResponse(res, err); }
					let userData = {
						_id: user._id,
						firstName: user.firstName,
						lastName: user.lastName,
						gender: user.gender,
						phoneNo: user.phoneNo,
					};
					return apiResponse.successResponseWithData(res,"Adding Patient Success.", userData);
				});
			}
		} catch (err) {
			//throw error in json response with status 500.
			return apiResponse.ErrorResponse(res, err);
		}
	}];

exports.getPatients = [
	auth,
	function (req, res) {
		try {
			PatientModel.find().then((patients)=>{
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


