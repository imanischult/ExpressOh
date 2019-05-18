//Dependencies
// =============================================================
require("dotenv").config();
var config = require('./config/config');
var fs = require("fs");
var express = require("express");
var $ = require("jquery");
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

var waitlist = [

];

// Displays all reservations
app.get("/api/reservations", function (req, res) {
    return res.json(reservations);
});

// Displays a single reservation, or returns false -- right now, it searches by name, but the route should be the ID
app.get("/api/reservations/:reservation", function (req, res) {
    var chosen = req.params.reservation;

    console.log(chosen);

    for (var i = 0; i < reservations.length; i++) {
        if (chosen === reservations[i].name) {
            return res.json(reservations[i]);
        }
    }

    return res.json(false);
});

//Reservation logic -- define how many tables there are, 

const tables = {
    totalTables: 20,
    availTables: 20,

    reserve: function () {

        app.post("/api/reservations", function (req, res) {
            // req.body hosts is equal to the JSON post sent from the user
            // This works because of our body parsing middleware
            var newres = req.body;

            console.log(newres);

            // We then add the json the user sent to the res array
            if (this.availTables > 0) {
                reservations.push(newres);

                // We then display the JSON to the users
                res.json(newres);
                this.availTables--;
            } else {
                waitlist.push(rewres);
                res.json(newres);
                console.log("no tables available, adding to waitlist.")
            }

        }

        )}
    }


// Listener
// ===========================================================
app.listen(PORT, function () {
        console.log(`App listening on PORT ${PORT}`);
    });

    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "home.html"));
    });

    app.get("/reserve", function (req, res) {
        res.sendFile(path.join(__dirname, "reserve.html"));
    });

    app.get("/tables", function (req, res) {
        res.sendFile(path.join(__dirname, "tables.html"));
    });

