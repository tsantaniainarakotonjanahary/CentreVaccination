var express = require("express");
var app = express();
//var data = require("./data.json");

//console.log(data);
const fs = require("fs");
/*var array = [];
fspdms.forEach((element) => {
  var longD = parseFloat(element.coordinates[0].split("°")[0]);
  console.log(element.coordinates);
  var longM = parseFloat(element.coordinates[0].split("°")[1].split("'")[0]);
  var longs = parseFloat(element.coordinates[0].split("'")[1]);

  var latD = parseFloat(element.coordinates[1].split("°")[0]);

  var latM = parseFloat(element.coordinates[1].split("°")[1].split("'")[0]);
  var lats = parseFloat(element.coordinates[1].split("'")[1]);

  array.push({
    name: element.name,
    coordinates: [
      (longD + longM / 60 + longs / 3600).toPrecision(9) * 1,
      (latD + latM / 60 + lats / 3600).toPrecision(9) * -1,
    ],
  });
});

fs.writeFileSync("centrefspdd.json", JSON.stringify(array));*/

// set the view engine to ejs
app.set("view engine", "ejs");
app.use("/static", express.static(__dirname + "/public"));

app.use(express.static("/public"));
app.use(express.static("/views"));

// index page
app.get("/admin-centre", function (req, res) {
  var fspdd = require("./centre.json");
  res.render("pages/centre", {
    centres: fspdd,
  });
});

// index page
app.get("/admin-fsp", function (req, res) {
  var fspdd = require("./centrefspdd.json");
  res.render("pages/centrefsp", {
    centres: fspdd,
  });
});

// about page
app.get("/about", function (req, res) {
  res.render("pages/about");
});

// about page
app.get("/", function (req, res) {
  res.render("pages/index");
});

app.listen(8080);
console.log("Server is listening on port 8080");
