var express = require("express");
const CaseController = require("../controllers/CasesController");

var router = express.Router();

router.post("/add-case", CaseController.addCase);
router.get("/get-case", CaseController.getCase);

module.exports = router;