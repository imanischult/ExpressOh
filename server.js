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

//Reservation data. This is actually going to be in the database; i am including it here as an example of the data we'; be pulling.
// =============================================================
var reservations = [
  {
    id: "", //use this for the routeName
    name: "",
    time: "",
    numPeople: 0,
  },
];

// Displays all reservations
app.get("/api/reservations", function(req, res) {
    return res.json(reservations);
  });
  
  // Displays a single reservation, or returns false -- right now, it searches by name, but the route should be the ID
  app.get("/api/reservations/:reservation", function(req, res) {
    var chosen = req.params.reservation;
  
    console.log(chosen);
  
    for (var i = 0; i < reservations.length; i++) {
      if (chosen === reservations[i].name) {
        return res.json(reservations[i]);
      }
    }
  
    return res.json(false);
  });


// Listener
// ===========================================================
app.listen(PORT, function() {
    console.log(`App listening on PORT ${PORT}`);
  });

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "home"));
});

app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "reserve"));
});

app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "tables"));
});

