var express = require("express");
var authRouter = require("./auth");
var bookRouter = require("./book");
var doctorRouter = require("./doctor");
var patientRouter = require("./patient");

var app = express();

app.use("/auth/", authRouter);
app.use("/book/", bookRouter);
app.use("/doctor/", doctorRouter);
app.use("/patients/", patientRouter);

module.exports = app;