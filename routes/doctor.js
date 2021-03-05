var express = require("express");
const DoctorController = require("../controllers/DoctorController");

var router = express.Router();

router.post("/register", DoctorController.register);
router.post("/login", DoctorController.login);

module.exports = router;