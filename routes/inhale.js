var express = require("express");
const InhaleController = require("../controllers/InhaleController");

var router = express.Router();

router.get("/predict/:resultNo", InhaleController.predictDiagnose);

module.exports = router;


