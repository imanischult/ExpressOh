//Dependencies
// =============================================================
require("dotenv").config();
var config = require('./config/config');
var fs = require("fs");
var express = require("express");
var path = require("path");
var mysql = require("mysql");

//Sets up the Express App
// =============================================================
var app = express();
var PORT = config.port;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Listener
// ===========================================================
app.listen(PORT, function() {
    console.log(`App listening on PORT ${PORT}`);
  });
  