//helper file to prepare responses.
const apiResponse = require("../helpers/apiResponse");

exports.predictDiagnose = [
	function (req, res) {
		let result ={};
		if(req.params.resultNo === "1") {
			result = {
				"AL": {
					"Cycle: 1": "COPD",
					"Cycle: 2": "COPD",
					"Cycle: 3": "COPD",
					"Cycle: 4": "COPD",
					"Cycle: 5": "COPD",
					"Cycle: 6": "COPD",
					"Cycle: 7": "COPD",
					"Cycle: 8": "COPD",
					"Cycle: 9": "COPD"
				},
				"AR": {
					"Cycle: 1": "COPD",
					"Cycle: 2": "COPD",
					"Cycle: 3": "COPD",
					"Cycle: 4": "COPD",
					"Cycle: 5": "COPD",
					"Cycle: 6": "COPD",
					"Cycle: 7": "COPD",
					"Cycle: 8": "COPD",
					"Cycle: 9": "COPD"
				},
				"LL": {
					"Cycle: 1": "COPD",
					"Cycle: 2": "Pneumonia",
					"Cycle: 3": "COPD",
					"Cycle: 4": "COPD",
					"Cycle: 5": "COPD",
					"Cycle: 6": "COPD",
					"Cycle: 7": "COPD",
					"Cycle: 8": "COPD",
					"Cycle: 9": "COPD"
				},
				"LR": {
					"Cycle: 1": "COPD",
					"Cycle: 2": "COPD",
					"Cycle: 3": "COPD",
					"Cycle: 4": "COPD",
					"Cycle: 5": "COPD",
					"Cycle: 6": "COPD",
					"Cycle: 7": "COPD",
					"Cycle: 8": "COPD",
					"Cycle: 9": "COPD"
				},
				"PL": {
					"Cycle: 1": "COPD",
					"Cycle: 2": "Pneumonia",
					"Cycle: 3": "COPD",
					"Cycle: 4": "COPD",
					"Cycle: 5": "COPD",
					"Cycle: 6": "COPD",
					"Cycle: 7": "COPD",
					"Cycle: 8": "COPD",
					"Cycle: 9": "COPD"
				},
				"PR": {
					"Cycle: 1": "COPD",
					"Cycle: 2": "COPD",
					"Cycle: 3": "COPD",
					"Cycle: 4": "COPD",
					"Cycle: 5": "COPD",
					"Cycle: 6": "COPD",
					"Cycle: 7": "COPD",
					"Cycle: 8": "COPD",
					"Cycle: 9": "COPD"
				},
				"TC": {
					"Cycle: 1": "COPD",
					"Cycle: 2": "COPD",
					"Cycle: 3": "COPD",
					"Cycle: 4": "COPD",
					"Cycle: 5": "COPD",
					"Cycle: 6": "COPD",
					"Cycle: 7": "COPD",
					"Cycle: 8": "COPD",
					"Cycle: 9": "COPD"
				},
				"classification": {
					"COPD": "61",
					"Pneumonia": "2"
				}
			};
		} else {
			result = {
				"AL": {
					"Cycle: 1": "COPD",
					"Cycle: 2": "COPD",
					"Cycle: 3": "COPD",
					"Cycle: 4": "COPD",
					"Cycle: 5": "COPD",
					"Cycle: 6": "COPD",
					"Cycle: 7": "COPD",
					"Cycle: 8": "COPD",
					"Cycle: 9": "COPD"
				},
				"AR": {
					"Cycle: 1": "COPD",
					"Cycle: 2": "COPD",
					"Cycle: 3": "COPD",
					"Cycle: 4": "COPD",
					"Cycle: 5": "COPD",
					"Cycle: 6": "COPD",
					"Cycle: 7": "COPD",
					"Cycle: 8": "COPD",
					"Cycle: 9": "COPD"
				},
				"LL": {
					"Cycle: 1": "COPD",
					"Cycle: 2": "COPD",
					"Cycle: 3": "COPD",
					"Cycle: 4": "COPD",
					"Cycle: 5": "COPD",
					"Cycle: 6": "COPD",
					"Cycle: 7": "COPD",
					"Cycle: 8": "COPD",
					"Cycle: 9": "COPD"
				},
				"LR": {
					"Cycle: 1": "COPD",
					"Cycle: 2": "COPD",
					"Cycle: 3": "COPD",
					"Cycle: 4": "COPD",
					"Cycle: 5": "COPD",
					"Cycle: 6": "COPD",
					"Cycle: 7": "COPD",
					"Cycle: 8": "COPD",
					"Cycle: 9": "COPD"
				},
				"PL": {
					"Cycle: 1": "COPD",
					"Cycle: 2": "COPD",
					"Cycle: 3": "COPD",
					"Cycle: 4": "COPD",
					"Cycle: 5": "COPD",
					"Cycle: 6": "COPD",
					"Cycle: 7": "COPD",
					"Cycle: 8": "COPD",
					"Cycle: 9": "COPD"
				},
				"PR": {
					"Cycle: 1": "COPD",
					"Cycle: 2": "COPD",
					"Cycle: 3": "COPD",
					"Cycle: 4": "COPD",
					"Cycle: 5": "COPD",
					"Cycle: 6": "COPD",
					"Cycle: 7": "COPD",
					"Cycle: 8": "COPD",
					"Cycle: 9": "COPD"
				},
				"TC": {
					"Cycle: 1": "COPD",
					"Cycle: 2": "COPD",
					"Cycle: 3": "COPD",
					"Cycle: 4": "COPD",
					"Cycle: 5": "COPD",
					"Cycle: 6": "COPD",
					"Cycle: 7": "COPD",
					"Cycle: 8": "COPD",
					"Cycle: 9": "COPD"
				},
				"classification": {
					"COPD": "63"
				}
			};
		}
        
		return apiResponse.successResponseWithData(res, "Operation success", result);
	}
];


