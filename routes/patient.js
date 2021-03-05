var express = require("express");
const PatientsController = require("../controllers/PatientsController");

var router = express.Router();

router.post("/add-patient", PatientsController.addPatients);
router.get("/", PatientsController.getPatients);

module.exports = router;